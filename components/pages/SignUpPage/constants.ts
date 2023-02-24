import { IInput } from '@customTypes/types';

export const signUpInputs: IInput[] = [
  {
    name: 'username',
    placeholder: 'Username',
    type: 'text',
  },
  {
    name: 'email',
    placeholder: 'Email Address',
    type: 'email',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirm Password',
    type: 'password',
  },
];

export const signInInputs: IInput[] = [
  {
    name: 'username',
    placeholder: 'Username',
    type: 'text',
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password',
  },
];
