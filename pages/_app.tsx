import { ApolloProvider } from '@apollo/client';
import { AuthContextProvider } from '@context/AuthContext';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

import { client } from '../apolloClient';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ApolloProvider>
  );
}
