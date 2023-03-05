import { ApolloError } from '@apollo/client';

export const getGraphQLErrors = (error?: ApolloError) => {
  if (!error) {
    return '';
  }

  return error.graphQLErrors.map(({ message }) => message).join(', ');
};
