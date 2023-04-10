import { gql } from '@apollo/client';

export const GET_STATS = gql`
  query getStats {
    getStats {
      usersCount
      tokensCount
    }
  }
`;
