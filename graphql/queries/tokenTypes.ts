import { gql } from '@apollo/client';

export const GET_TOKEN_TYPES = gql`
  query getAllTokenTypes {
    getAllTokenTypes {
      id
      name
      picture
    }
  }
`;
