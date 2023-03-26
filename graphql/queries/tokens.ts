import { gql } from '@apollo/client';

export const GET_ALL_TOKENS = gql`
  query getAllTokens($params: PaginateParams!) {
    getAllTokens(params: $params) {
      data {
        id
        name
        author {
          username
          id
          picture
        }
        description
        picture
        price
        type {
          name
          picture
          id
        }
        owner {
          username
          id
        }
      }
      total
    }
  }
`;

export const GET_RANDOM_TOKENS = gql`
  query getRandomTokens($count: Int!) {
    getRandomTokens(count: $count) {
      id
      name
      author {
        username
        id
        picture
      }
      description
      picture
      price
      type {
        name
        picture
        id
      }
    }
  }
`;