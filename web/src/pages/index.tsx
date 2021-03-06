import { Box, Button, Flex, Heading, Link, Stack, Text } from '@chakra-ui/core';
import { withUrqlClient } from 'next-urql';
import NextLink from 'next/link';
import { useState } from 'react';
import { EditDeletePostButtons } from '../components/EditDeletePostButtons';
import { Layout } from '../components/Layout';
import { UpvoteSection } from '../components/UpvoteSection';
import { PostsQuery, usePostsQuery } from '../generated/graphql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { withApollo } from '../utils/withApollo';

const Index = () => {
  const { data, error, loading, fetchMore, variables } = usePostsQuery({
    variables: {
      limit: 15,
      cursor: null,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!loading && !data) {
    return (
      <div>
        <div>no posts</div>
        <div>{error?.message}</div>
      </div>
    );
  }
  return (
    <Box bg="#DAE0E6">
      <Layout>
        {!data && loading ? (
          <div>loading...</div>
        ) : (
          <Stack spacing={4}>
            {data!.posts.posts.map((p) =>
              !p ? null : (
                <Flex key={p.id} p={5} shadow="md" borderWidth="1px" bg="white">
                  <UpvoteSection post={p} />
                  <Box flex={1}>
                    <NextLink href="/post/[id]" as={`/post/${p.id}`}>
                      <Link>
                        <Heading fontSize="xl">{p.title}</Heading>
                      </Link>
                    </NextLink>
                    <Text>posted by {p.author.username}</Text>
                    <Flex align="center">
                      <Text flex={1} mt={4}>
                        {p.textSnippet}
                      </Text>
                      <Box ml="auto">
                        <EditDeletePostButtons
                          authorId={p.author.id}
                          id={p.id}
                        />
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              )
            )}
          </Stack>
        )}
        {data && data.posts.hasMore ? (
          <Flex>
            <Button
              onClick={() => {
                fetchMore({
                  variables: {
                    limit: variables?.limit,
                    cursor:
                      data.posts.posts[data.posts.posts.length - 1].createdAt,
                  },
                  // updateQuery: (previousValue, { fetchMoreResult }): PostsQuery => {
                  //   if (!fetchMoreResult) {
                  //     return previousValue as PostsQuery
                  //   }
                  //   return {
                  //     __typename: 'Query',
                  //     posts: {
                  //       __typename: 'PaginatedPosts',
                  //       hasMore: (fetchMoreResult as PostsQuery).posts.hasMore,
                  //       posts: [...(previousValue as PostsQuery).posts.posts], ...(fetchMoreResult as PostsQuery).posts.posts
                  //     }
                  //   }
                  // }
                });
              }}
              isLoading={loading}
              m="auto"
              my={8}
            >
              Load more
            </Button>
          </Flex>
        ) : null}
      </Layout>
    </Box>
  );
};

export default withApollo({ ssr: true })(Index);
