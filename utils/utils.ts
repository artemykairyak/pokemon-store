import { ApolloError } from '@apollo/client';
import * as avatars from '@assets/icons/avatars';


export const getGraphQLErrors = (error?: ApolloError) => {
  if (!error) {
    return '';
  }

  return error.graphQLErrors.map(({ message }) => message).join(', ');
};

export const getRandomAvatar = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  return Object.values(avatars)[randomNumber].src;
};
