/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  mutation login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      access_token\n      user {\n        id\n        username\n      }\n    }\n  }\n": types.LoginDocument,
    "\n  mutation signUp($input: SignUpUserInput!) {\n    signUp(signUpUserInput: $input)\n  }\n": types.SignUpDocument,
    "\n  query getAllTokenTypes {\n    getAllTokenTypes {\n      id\n      name\n      picture\n    }\n  }\n": types.GetAllTokenTypesDocument,
    "\n  query getAllTokens($params: PaginateParams!) {\n    getAllTokens(params: $params) {\n      data {\n        id\n        name\n        author {\n          username\n          id\n          picture\n        }\n        description\n        picture\n        price\n        type {\n          name\n          picture\n          id\n        }\n        owner {\n          username\n          id\n        }\n      }\n      total\n    }\n  }\n": types.GetAllTokensDocument,
    "\n  query getRandomTokens($count: Int!) {\n    getRandomTokens(count: $count) {\n      id\n      name\n      author {\n        username\n        id\n        picture\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n    }\n  }\n": types.GetRandomTokensDocument,
    "\n  fragment BaseUserFields on User {\n    id\n    username\n    picture\n    boughtTokensCount\n    createdTokensCount\n  }\n": types.BaseUserFieldsFragmentDoc,
    "\n  query getAllUsers($params: PaginateParams!) {\n    getAllUsers(params: $params) {\n      data {\n        ...BaseUserFields\n        bio\n        email\n        bio\n        cover\n        authoredTokens {\n          id\n          name\n          description\n          price\n          picture\n        }\n        ownedTokens {\n          id\n          name\n          description\n          price\n        }\n        links {\n          id\n          url\n          type {\n            id\n            name\n          }\n        }\n      }\n      total\n    }\n  }\n": types.GetAllUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      access_token\n      user {\n        id\n        username\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation login($input: LoginUserInput!) {\n    login(loginUserInput: $input) {\n      access_token\n      user {\n        id\n        username\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signUp($input: SignUpUserInput!) {\n    signUp(signUpUserInput: $input)\n  }\n"): (typeof documents)["\n  mutation signUp($input: SignUpUserInput!) {\n    signUp(signUpUserInput: $input)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllTokenTypes {\n    getAllTokenTypes {\n      id\n      name\n      picture\n    }\n  }\n"): (typeof documents)["\n  query getAllTokenTypes {\n    getAllTokenTypes {\n      id\n      name\n      picture\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllTokens($params: PaginateParams!) {\n    getAllTokens(params: $params) {\n      data {\n        id\n        name\n        author {\n          username\n          id\n          picture\n        }\n        description\n        picture\n        price\n        type {\n          name\n          picture\n          id\n        }\n        owner {\n          username\n          id\n        }\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query getAllTokens($params: PaginateParams!) {\n    getAllTokens(params: $params) {\n      data {\n        id\n        name\n        author {\n          username\n          id\n          picture\n        }\n        description\n        picture\n        price\n        type {\n          name\n          picture\n          id\n        }\n        owner {\n          username\n          id\n        }\n      }\n      total\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getRandomTokens($count: Int!) {\n    getRandomTokens(count: $count) {\n      id\n      name\n      author {\n        username\n        id\n        picture\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getRandomTokens($count: Int!) {\n    getRandomTokens(count: $count) {\n      id\n      name\n      author {\n        username\n        id\n        picture\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseUserFields on User {\n    id\n    username\n    picture\n    boughtTokensCount\n    createdTokensCount\n  }\n"): (typeof documents)["\n  fragment BaseUserFields on User {\n    id\n    username\n    picture\n    boughtTokensCount\n    createdTokensCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllUsers($params: PaginateParams!) {\n    getAllUsers(params: $params) {\n      data {\n        ...BaseUserFields\n        bio\n        email\n        bio\n        cover\n        authoredTokens {\n          id\n          name\n          description\n          price\n          picture\n        }\n        ownedTokens {\n          id\n          name\n          description\n          price\n        }\n        links {\n          id\n          url\n          type {\n            id\n            name\n          }\n        }\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query getAllUsers($params: PaginateParams!) {\n    getAllUsers(params: $params) {\n      data {\n        ...BaseUserFields\n        bio\n        email\n        bio\n        cover\n        authoredTokens {\n          id\n          name\n          description\n          price\n          picture\n        }\n        ownedTokens {\n          id\n          name\n          description\n          price\n        }\n        links {\n          id\n          url\n          type {\n            id\n            name\n          }\n        }\n      }\n      total\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;