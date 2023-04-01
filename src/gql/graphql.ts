/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BuyTokenInput = {
  id: Scalars['Int'];
  price: Scalars['Int'];
};

export type CreateLinkInput = {
  type: Scalars['Float'];
  url: Scalars['String'];
};

export type CreateLinkTypeInput = {
  name: Scalars['String'];
};

export type CreateTokenInput = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  picture: Scalars['String'];
  price: Scalars['Float'];
  type: Scalars['String'];
};

export type CreateTokenTypeInput = {
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type GetAuthorTokensInput = {
  owned?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['Float'];
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['Int'];
  type: LinkType;
  url: Scalars['String'];
  user: User;
};

export type LinkType = {
  __typename?: 'LinkType';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createLink: Link;
  createLinkType: LinkType;
  createToken: Token;
  createTokenType: TokenType;
  createUser: User;
  decreaseStats: Stats;
  increaseStats: Stats;
  login: LoginResponse;
  removeLink: Scalars['Boolean'];
  removeLinkType: Scalars['Boolean'];
  removeToken: Scalars['Boolean'];
  removeTokenType: Scalars['Boolean'];
  signUp: Scalars['Boolean'];
  updateLink: Link;
  updateToken: Token;
  updateUser: User;
};


export type MutationCreateLinkArgs = {
  createLinkInput: CreateLinkInput;
};


export type MutationCreateLinkTypeArgs = {
  createLinkTypeInput: CreateLinkTypeInput;
};


export type MutationCreateTokenArgs = {
  createTokenInput: CreateTokenInput;
};


export type MutationCreateTokenTypeArgs = {
  createTokenTypeInput: CreateTokenTypeInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationDecreaseStatsArgs = {
  updateStatsInput: UpdateStatsInput;
};


export type MutationIncreaseStatsArgs = {
  updateStatsInput: UpdateStatsInput;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationRemoveLinkArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveLinkTypeArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTokenArgs = {
  id: Scalars['Int'];
};


export type MutationRemoveTokenTypeArgs = {
  id: Scalars['String'];
};


export type MutationSignUpArgs = {
  signUpUserInput: SignUpUserInput;
};


export type MutationUpdateLinkArgs = {
  updateLinkInput: UpdateLinkInput;
};


export type MutationUpdateTokenArgs = {
  updateTokenInput: UpdateTokenInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type PaginateParams = {
  limit?: InputMaybe<Scalars['Int']>;
  page?: InputMaybe<Scalars['Int']>;
};

export type PaginatedTokensData = {
  __typename?: 'PaginatedTokensData';
  data: Array<Token>;
  total: Scalars['Int'];
};

export type PaginatedUsersData = {
  __typename?: 'PaginatedUsersData';
  data: Array<User>;
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  buyToken: Token;
  getAllLinkTypes: Array<LinkType>;
  getAllTokenTypes: Array<TokenType>;
  getAllTokens: PaginatedTokensData;
  getAllUsers: PaginatedUsersData;
  getLinkTypeById: LinkType;
  getRandomTokens: Array<Token>;
  getStats: Array<Stats>;
  getToken: Token;
  getTokenTypeById: TokenType;
  getTokensByType: Array<Token>;
  getUserByUsername: User;
  getUserTokens: Array<Token>;
  me: User;
};


export type QueryBuyTokenArgs = {
  buyTokenInput: BuyTokenInput;
};


export type QueryGetAllTokensArgs = {
  params: PaginateParams;
};


export type QueryGetAllUsersArgs = {
  params: PaginateParams;
};


export type QueryGetLinkTypeByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGetRandomTokensArgs = {
  count: Scalars['Int'];
};


export type QueryGetTokenArgs = {
  id: Scalars['Int'];
};


export type QueryGetTokenTypeByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetTokensByTypeArgs = {
  type: Scalars['String'];
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryGetUserTokensArgs = {
  getAuthorTokensInput: GetAuthorTokensInput;
};

export type SignUpUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Stats = {
  __typename?: 'Stats';
  id: Scalars['Int'];
  tokensCount: Scalars['Int'];
  usersCount: Scalars['Int'];
};

export type Token = {
  __typename?: 'Token';
  author: User;
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  owner: User;
  picture: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
  type: TokenType;
};

export type TokenType = {
  __typename?: 'TokenType';
  id: Scalars['String'];
  name: Scalars['String'];
  picture: Scalars['String'];
  tokens: Token;
};

export type UpdateLinkInput = {
  type: Scalars['Float'];
  url: Scalars['String'];
};

export type UpdateStatsInput = {
  updateField: Scalars['String'];
};

export type UpdateTokenInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['Float'];
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['Float']>;
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  bio?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  authoredTokens?: Maybe<Array<Token>>;
  bio?: Maybe<Scalars['String']>;
  boughtTokensCount: Scalars['Float'];
  cover?: Maybe<Scalars['String']>;
  createdTokensCount: Scalars['Float'];
  email: Scalars['String'];
  id?: Maybe<Scalars['Int']>;
  links?: Maybe<Array<Link>>;
  ownedTokens?: Maybe<Array<Token>>;
  password: Scalars['String'];
  picture?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type LoginMutationVariables = Exact<{
  input: LoginUserInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', access_token: string, user: { __typename?: 'User', id?: number | null, username?: string | null } } };

export type SignUpMutationVariables = Exact<{
  input: SignUpUserInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', username?: string | null, id?: number | null, email: string } };

export type GetAllTokenTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTokenTypesQuery = { __typename?: 'Query', getAllTokenTypes: Array<{ __typename?: 'TokenType', id: string, name: string, picture: string }> };

export type GetAllTokensQueryVariables = Exact<{
  params: PaginateParams;
}>;


export type GetAllTokensQuery = { __typename?: 'Query', getAllTokens: { __typename?: 'PaginatedTokensData', total: number, data: Array<{ __typename?: 'Token', id: number, name: string, description: string, picture: string, price?: number | null, author: { __typename?: 'User', username?: string | null, id?: number | null, picture?: string | null }, type: { __typename?: 'TokenType', name: string, picture: string, id: string }, owner: { __typename?: 'User', username?: string | null, id?: number | null } }> } };

export type GetRandomTokensQueryVariables = Exact<{
  count: Scalars['Int'];
}>;


export type GetRandomTokensQuery = { __typename?: 'Query', getRandomTokens: Array<{ __typename?: 'Token', id: number, name: string, description: string, picture: string, price?: number | null, author: { __typename?: 'User', username?: string | null, id?: number | null, picture?: string | null }, type: { __typename?: 'TokenType', name: string, picture: string, id: string } }> };

export type BaseUserFieldsFragment = { __typename?: 'User', id?: number | null, username?: string | null, picture?: string | null, boughtTokensCount: number, createdTokensCount: number } & { ' $fragmentName'?: 'BaseUserFieldsFragment' };

export type GetAllUsersQueryVariables = Exact<{
  params: PaginateParams;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: { __typename?: 'PaginatedUsersData', total: number, data: Array<(
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'BaseUserFieldsFragment': BaseUserFieldsFragment } }
    )> } };

export const BaseUserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseUserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"boughtTokensCount"}},{"kind":"Field","name":{"kind":"Name","value":"createdTokensCount"}}]}}]} as unknown as DocumentNode<BaseUserFieldsFragment, unknown>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"access_token"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SignUpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signUp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignUpUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signUp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signUpUserInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<SignUpMutation, SignUpMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const GetAllTokenTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllTokenTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTokenTypes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}}]}}]} as unknown as DocumentNode<GetAllTokenTypesQuery, GetAllTokenTypesQueryVariables>;
export const GetAllTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginateParams"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"params"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}}]} as unknown as DocumentNode<GetAllTokensQuery, GetAllTokensQueryVariables>;
export const GetRandomTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRandomTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"count"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRandomTokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"count"},"value":{"kind":"Variable","name":{"kind":"Name","value":"count"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"picture"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetRandomTokensQuery, GetRandomTokensQueryVariables>;
export const GetAllUsersDocument = {"kind":"Document", "definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"params"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginateParams"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"params"},"value":{"kind":"Variable","name":{"kind":"Name","value":"params"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseUserFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total"}}]}}]}},...BaseUserFieldsFragmentDoc.definitions]} as unknown as DocumentNode<GetAllUsersQuery, GetAllUsersQueryVariables>;