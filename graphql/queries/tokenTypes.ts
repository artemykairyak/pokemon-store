import { gql } from '@apollo/client';

export const GET_TOKEN_TYPES = gql`
  query getTokenTypes($params: PaginateParams!) {
    getTokenTypes(params: $params) {
      data {
        id
        name
        picture
      }
      total
    }
  }
`;
