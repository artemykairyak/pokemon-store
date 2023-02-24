/* eslint-disable */
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

export type Author = {
  __typename?: 'Author';
  cards?: Maybe<Array<Card>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  picture: Scalars['String'];
};

export type Card = {
  __typename?: 'Card';
  author: Author;
  authorId: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  picture: Scalars['String'];
  price?: Maybe<Scalars['Float']>;
};

export type CreateAuthorInput = {
  name: Scalars['String'];
  picture?: InputMaybe<Scalars['String']>;
};

export type CreateCardInput = {
  authorId: Scalars['Int'];
  name: Scalars['String'];
  picture: Scalars['String'];
  price?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createCard: Card;
  removeAuthor: Author;
  updateAuthor: Author;
};


export type MutationCreateAuthorArgs = {
  createAuthorInput: CreateAuthorInput;
};


export type MutationCreateCardArgs = {
  createCardInput: CreateCardInput;
};


export type MutationRemoveAuthorArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateAuthorArgs = {
  updateAuthorInput: UpdateAuthorInput;
};

export type Query = {
  __typename?: 'Query';
  authors: Array<Author>;
  getAllCards: Array<Card>;
  getAuthor: Author;
  getCard: Card;
};


export type QueryGetAuthorArgs = {
  id: Scalars['Int'];
};


export type QueryGetCardArgs = {
  id: Scalars['Int'];
};

export type UpdateAuthorInput = {
  id: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  picture?: InputMaybe<Scalars['String']>;
};
