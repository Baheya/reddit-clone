import 'reflect-metadata';
import { __prod__, COOKIE_NAME } from './constants';
import 'dotenv-safe/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import { UserResolver } from './resolvers/user';
import Redis from 'ioredis';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { Post } from './entities/Post';
import { User } from './entities/User';
import path from 'path';
import { Upvote } from './entities/Upvote';
import { createUserLoader } from './utils/createUserLoader';
import { createUpvoteLoader } from './utils/createUpvoteLoader';

const main = async () => {
  const conn = await createConnection({
    type: 'postgres',
    url:  process.env.HEROKU_POSTGRESQL_ORANGE_URL || process.env.DATABASE_URL,
    logging: true,
    // synchronize: true,
    migrations: [path.join(__dirname, './migrations/*')],
    entities: [Post, User, Upvote],
  });

  await conn.runMigrations();

  // await Post.delete({});

  const app = express();

  const REDIS_URL = process.env.REDIS_URL || '127.0.0.1:6379';

  const RedisStore = connectRedis(session);
  const redis = new Redis(REDIS_URL);
  app.set('trust proxy', 1);
  app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years,
        httpOnly: true,
        sameSite: 'lax', // csrf
        domain: __prod__ ? "reddit-clone-ashen.vercel.app" : undefined,
        secure: __prod__, // cookie only works in https
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false,
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, UserResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      userLoader: createUserLoader(),
      upvoteLoader: createUpvoteLoader(),
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.get('/', (_, res) => {
    res.send('hi');
  });
  app.listen(parseInt(process.env.PORT), () => {
    console.log('Hi from port 8080!');
  });
};

main().catch((err) => {
  console.error(err);
});
