import { NextPage } from 'next';
import { Wrapper } from '../../components/Wrapper';
import { Formik, Form } from 'formik';
import { toErrorMap } from '../../utils/toErrorMap';
import { InputField } from '../../components/InputField';
import { Button, Box, Link, Flex } from '@chakra-ui/core';
import { useChangePasswordMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../../utils/createUrqlClient';
import NextLink from 'next/link';

export const ChangePassword: NextPage = () => {
  const router = useRouter();
  const [, changePassword] = useChangePasswordMutation();
  const [tokenError, setTokenError] = useState('');
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: '' }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            newPassword: values.newPassword,
            token:
              typeof router.query.token === 'string' ? router.query.token : '',
          });
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            if ('token' in errorMap) {
              setTokenError(errorMap.token);
            }
            setErrors(errorMap);
          } else if (response.data?.changePassword.user) {
            // worked
            router.push('/');
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              label="New Password"
              placeholder="new password"
              type="password"
            />
            {tokenError && (
              <Flex>
                <Box mr={2} color="red">
                  {tokenError}
                </Box>
                <NextLink href="/forgot-password">
                  <Link>go forget it again</Link>
                </NextLink>
              </Flex>
            )}
            <Button
              mt={4}
              type="submit"
              variantColor="teal"
              isLoading={isSubmitting}
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default withUrqlClient(createUrqlClient)(ChangePassword);
