import { gql } from '@apollo/client';

export const BASE_USER_FIELDS = gql`
  fragment BaseUserFields on User {
    id
    username
    picture
    boughtTokensCount
    createdTokensCount
  }
`;

export const GET_SHORT_AUTHORS = gql`
  ${BASE_USER_FIELDS}
  query getAllUsers($params: PaginateParams!) {
    getAllUsers(params: $params) {
      data {
        ...BaseUserFields
      }
      total
    }
  }
`;

export const USER_INFO = gql`
  fragment UserInfo on User {
    id
    username
    bio
    email
    bio
    picture
    cover
    boughtTokensCount
    createdTokensCount
    links {
      id
      url
      type {
        id
        name
      }
    }
  }
`;

// export const GET_ALL_AUTHORS = gql`
//   ${BASE_USER_FIELDS}
//   query getAllUsers($params: PaginateParams!) {
//     getAllUsers(params: $params) {
//       data {
//         ...BaseUserFields
//         bio
//         email
//         bio
//         cover
//         authoredTokens {
//           id
//           name
//           description
//           price
//           picture
//         }
//         ownedTokens {
//           id
//           name
//           description
//           price
//         }
//         links {
//           id
//           url
//           type {
//             id
//             name
//           }
//         }
//       }
//       total
//     }
//   }
// `;

export const GET_USER_BY_USERNAME = gql`
  ${USER_INFO}
  query getUserByUsername($username: String!) {
    getUserByUsername(username: $username) {
      ...UserInfo
    }
  }
`;
