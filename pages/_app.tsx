import { ApolloProvider } from '@apollo/client';
import { AuthContextProvider } from '@context/AuthContext';
import '@styles/globals.css';
import type { AppProps } from 'next/app';

import { Client } from '../apolloClient';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={Client}>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </ApolloProvider>
  );
}
