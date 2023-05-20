import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($input: LoginUserInput!) {
    login(loginUserInput: $input) {
      access_token
      user {
        id
        username
        picture
      }
    }
  }
`;

export const SIGN_UP = gql`
  mutation signUp($input: SignUpUserInput!) {
    signUp(signUpUserInput: $input)
  }
`;
