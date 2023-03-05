import { User } from '@graphqlTypes/graphql';
import { HTMLInputTypeAttribute } from 'react';


export interface IInput {
  name: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

export type UserWithoutPassword = Omit<User, 'password'>;
