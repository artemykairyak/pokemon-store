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
    "\n  \n  mutation updateUser($input: UpdateUserInput!) {\n    updateUser(updateUserInput: $input) {\n      ...UserInfo\n    }\n  }\n": types.UpdateUserDocument,
    "\n  query Me {\n    me {\n      username\n      id\n      email\n    }\n  }\n": types.MeDocument,
    "\n  fragment BaseLinkFields on Link {\n    id\n    type {\n      id\n      name\n    }\n    url\n  }\n": types.BaseLinkFieldsFragmentDoc,
    "\n  \n  mutation createLink($input: CreateLinkInput!) {\n    createLink(createLinkInput: $input) {\n      ...BaseLinkFields\n    }\n  }\n": types.CreateLinkDocument,
    "\n  \n  mutation updateLink($input: UpdateLinkInput!) {\n    updateLink(updateLinkInput: $input) {\n      ...BaseLinkFields\n    }\n  }\n": types.UpdateLinkDocument,
    "\n  mutation removeLink($type: String!) {\n    removeLink(type: $type)\n  }\n": types.RemoveLinkDocument,
    "\n  query getAllTokenTypes {\n    getAllTokenTypes {\n      id\n      name\n      picture\n    }\n  }\n": types.GetAllTokenTypesDocument,
    "\n  query getAllTokens($params: PaginateParams!) {\n    getAllTokens(params: $params) {\n      data {\n        id\n        name\n        author {\n          username\n          id\n          picture\n        }\n        description\n        picture\n        price\n        type {\n          name\n          picture\n          id\n        }\n        owner {\n          username\n          id\n        }\n      }\n      total\n    }\n  }\n": types.GetAllTokensDocument,
    "\n  query getRandomTokens($input: GetRandomTokensInput!) {\n    getRandomTokens(getRandomTokensInput: $input) {\n      id\n      name\n      author {\n        username\n        id\n        picture\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n    }\n  }\n": types.GetRandomTokensDocument,
    "\n  query getUserTokens(\n    $getAuthorTokensInput: GetAuthorTokensInput!\n    $params: PaginateParams!\n  ) {\n    getUserTokens(\n      getAuthorTokensInput: $getAuthorTokensInput\n      params: $params\n    ) {\n      data {\n        id\n        name\n        author {\n          username\n        }\n        description\n        picture\n        price\n        type {\n          name\n          picture\n          id\n        }\n        owner {\n          username\n          id\n        }\n      }\n      total\n    }\n  }\n": types.GetUserTokensDocument,
    "\n  query getToken($id: Int!) {\n    getToken(id: $id) {\n      id\n      name\n      author {\n        username\n        id\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n      owner {\n        username\n        id\n      }\n    }\n  }\n": types.GetTokenDocument,
    "\n  fragment BaseUserFields on User {\n    id\n    username\n    picture\n    boughtTokensCount\n    createdTokensCount\n  }\n": types.BaseUserFieldsFragmentDoc,
    "\n  \n  query getAllUsers($params: PaginateParams!) {\n    getAllUsers(params: $params) {\n      data {\n        ...BaseUserFields\n      }\n      total\n    }\n  }\n": types.GetAllUsersDocument,
    "\n  fragment UserInfo on User {\n    id\n    username\n    bio\n    email\n    bio\n    picture\n    cover\n    boughtTokensCount\n    createdTokensCount\n    links {\n      id\n      url\n      type {\n        id\n        name\n      }\n    }\n  }\n": types.UserInfoFragmentDoc,
    "\n  \n  query getUserByUsername($username: String!) {\n    getUserByUsername(username: $username) {\n      ...UserInfo\n    }\n  }\n": types.GetUserByUsernameDocument,
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
export function graphql(source: "\n  \n  mutation updateUser($input: UpdateUserInput!) {\n    updateUser(updateUserInput: $input) {\n      ...UserInfo\n    }\n  }\n"): (typeof documents)["\n  \n  mutation updateUser($input: UpdateUserInput!) {\n    updateUser(updateUserInput: $input) {\n      ...UserInfo\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Me {\n    me {\n      username\n      id\n      email\n    }\n  }\n"): (typeof documents)["\n  query Me {\n    me {\n      username\n      id\n      email\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseLinkFields on Link {\n    id\n    type {\n      id\n      name\n    }\n    url\n  }\n"): (typeof documents)["\n  fragment BaseLinkFields on Link {\n    id\n    type {\n      id\n      name\n    }\n    url\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  mutation createLink($input: CreateLinkInput!) {\n    createLink(createLinkInput: $input) {\n      ...BaseLinkFields\n    }\n  }\n"): (typeof documents)["\n  \n  mutation createLink($input: CreateLinkInput!) {\n    createLink(createLinkInput: $input) {\n      ...BaseLinkFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  mutation updateLink($input: UpdateLinkInput!) {\n    updateLink(updateLinkInput: $input) {\n      ...BaseLinkFields\n    }\n  }\n"): (typeof documents)["\n  \n  mutation updateLink($input: UpdateLinkInput!) {\n    updateLink(updateLinkInput: $input) {\n      ...BaseLinkFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation removeLink($type: String!) {\n    removeLink(type: $type)\n  }\n"): (typeof documents)["\n  mutation removeLink($type: String!) {\n    removeLink(type: $type)\n  }\n"];
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
export function graphql(source: "\n  query getRandomTokens($input: GetRandomTokensInput!) {\n    getRandomTokens(getRandomTokensInput: $input) {\n      id\n      name\n      author {\n        username\n        id\n        picture\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getRandomTokens($input: GetRandomTokensInput!) {\n    getRandomTokens(getRandomTokensInput: $input) {\n      id\n      name\n      author {\n        username\n        id\n        picture\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserTokens(\n    $getAuthorTokensInput: GetAuthorTokensInput!\n    $params: PaginateParams!\n  ) {\n    getUserTokens(\n      getAuthorTokensInput: $getAuthorTokensInput\n      params: $params\n    ) {\n      data {\n        id\n        name\n        author {\n          username\n        }\n        description\n        picture\n        price\n        type {\n          name\n          picture\n          id\n        }\n        owner {\n          username\n          id\n        }\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  query getUserTokens(\n    $getAuthorTokensInput: GetAuthorTokensInput!\n    $params: PaginateParams!\n  ) {\n    getUserTokens(\n      getAuthorTokensInput: $getAuthorTokensInput\n      params: $params\n    ) {\n      data {\n        id\n        name\n        author {\n          username\n        }\n        description\n        picture\n        price\n        type {\n          name\n          picture\n          id\n        }\n        owner {\n          username\n          id\n        }\n      }\n      total\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getToken($id: Int!) {\n    getToken(id: $id) {\n      id\n      name\n      author {\n        username\n        id\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n      owner {\n        username\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query getToken($id: Int!) {\n    getToken(id: $id) {\n      id\n      name\n      author {\n        username\n        id\n      }\n      description\n      picture\n      price\n      type {\n        name\n        picture\n        id\n      }\n      owner {\n        username\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment BaseUserFields on User {\n    id\n    username\n    picture\n    boughtTokensCount\n    createdTokensCount\n  }\n"): (typeof documents)["\n  fragment BaseUserFields on User {\n    id\n    username\n    picture\n    boughtTokensCount\n    createdTokensCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query getAllUsers($params: PaginateParams!) {\n    getAllUsers(params: $params) {\n      data {\n        ...BaseUserFields\n      }\n      total\n    }\n  }\n"): (typeof documents)["\n  \n  query getAllUsers($params: PaginateParams!) {\n    getAllUsers(params: $params) {\n      data {\n        ...BaseUserFields\n      }\n      total\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserInfo on User {\n    id\n    username\n    bio\n    email\n    bio\n    picture\n    cover\n    boughtTokensCount\n    createdTokensCount\n    links {\n      id\n      url\n      type {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment UserInfo on User {\n    id\n    username\n    bio\n    email\n    bio\n    picture\n    cover\n    boughtTokensCount\n    createdTokensCount\n    links {\n      id\n      url\n      type {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  \n  query getUserByUsername($username: String!) {\n    getUserByUsername(username: $username) {\n      ...UserInfo\n    }\n  }\n"): (typeof documents)["\n  \n  query getUserByUsername($username: String!) {\n    getUserByUsername(username: $username) {\n      ...UserInfo\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;