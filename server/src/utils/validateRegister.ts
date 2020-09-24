import { UsernamePasswordInput } from 'src/resolvers/UsernamePasswordInput';

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'please enter a valid email',
      },
    ];
  }

  if (options.username.length <= 2) {
    return [
      {
        field: 'username',
        message: 'please choose a longer username',
      },
    ];
  }

  if (options.username.includes('@')) {
    return [
      {
        field: 'username',
        message: 'cannot include an',
      },
    ];
  }

  if (options.password.length <= 3) {
    return [
      {
        field: 'password',
        message: 'please choose a longer password',
      },
    ];
  }
  return null;
};
