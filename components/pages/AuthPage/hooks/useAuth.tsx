import { useMutation } from '@apollo/client';
import { LS_ACCESS_TOKEN } from '@constants/constants';
import { AuthContext } from '@context/AuthContext';
import { LOGIN, SIGN_UP } from '@graphql/mutations/auth';
import { LoginResponse, LoginUserInput } from '@graphqlTypes/graphql';
import { getGraphQLErrors } from '@utils/utils';
import { useContext, useEffect, useState } from 'react';


export const useAuth = () => {
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const { setUser } = useContext(AuthContext);
  const [loginMutation, { loading: loginLoading, error: loginError }] =
    useMutation<{ login: LoginResponse }, { input: LoginUserInput }>(LOGIN);
  const [signUpMutation, { loading: signUpLoading, error: signUpError }] =
    useMutation(SIGN_UP);

  useEffect(() => {
    setErrors(getGraphQLErrors(loginError || signUpError));
  }, [loginError, signUpError]);

  useEffect(() => {
    setLoading(loginLoading || signUpLoading);
  }, [loginLoading, signUpLoading]);

  const login = async (username: string, password: string) => {
    try {
      const res = await loginMutation({
        variables: { input: { username, password } },
      });

      if (res.data?.login) {
        localStorage.setItem(
          LS_ACCESS_TOKEN,
          res.data.login.access_token || '',
        );

        setUser(res.data.login.user);

        return !!res.data;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const signUp = async (username: string, email: string, password: string) => {
    try {
      await signUpMutation({
        variables: { input: { username, password, email } },
      });
      return true;
    } catch (e) {
      console.error(e);
    }
  };

  return { errors, loading, login, signUp };
};
