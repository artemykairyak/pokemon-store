import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      access_token
      user {
        id
        username
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($input: SignUpUserInput!) {
    signUp(signUpUserInput: $input) {
      id
      username
    }
  }
`;
