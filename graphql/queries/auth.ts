import { gql } from '@apollo/client';

export const ME = gql`
  query {
    me {
      username
      id
      email
    }
  }
`;
