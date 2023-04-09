import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const authLink = setContext((request, { headers }) => {
  const token = localStorage.getItem('pstoreAccessToken');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SCHEMA_URL,
});

export const Client = new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: from([authLink, httpLink]),
  cache: new InMemoryCache(),

  defaultOptions: {
    mutate: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
});
