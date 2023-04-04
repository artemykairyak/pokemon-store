import { gql } from '@apollo/client';
import { USER_INFO } from '@graphql/queries/users';


export const UPDATE_USER = gql`
  ${USER_INFO}
  mutation updateUser($input: UpdateUserInput!) {
    updateUser(updateUserInput: $input) {
      ...UserInfo
    }
  }
`;
