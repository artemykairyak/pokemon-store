import { useMutation, useQuery } from '@apollo/client';
import { useFireworks } from '@components/pages/TokenPage/hooks/useFireworks';
import { AuthContext } from '@context/AuthContext';
import { BUY_TOKEN, GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GET_USER_BY_USERNAME } from '@graphql/queries/users';
import {
  BuyTokenMutationVariables,
  GetRandomTokensQueryVariables,
  Token,
} from '@graphqlTypes/graphql';
import { useMedia } from '@hooks/useMedia';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

export const useTokenPage = (token: Token) => {
  const router = useRouter();
  const { smallTablet } = useMedia();
  const { user } = useContext(AuthContext);
  const { isFireworks, setIsFireworks } = useFireworks();
  const isMineToken = token.author.id === user?.id;
  const isBoughtToken = !!token.owner.id;
  const {
    data: randomTokens,
    refetch,
    loading,
  } = useQuery<{ getRandomTokens: Token[] }, GetRandomTokensQueryVariables>(
    GET_RANDOM_TOKENS,
    {
      variables: {
        input: {
          count: 3,
          username: token.author.username,
          excludedId: token.id,
        },
      },
    },
  );
  const [buyToken] = useMutation<Token, BuyTokenMutationVariables>(BUY_TOKEN);

  useEffect(() => {
    if (smallTablet) {
      refetch({ input: { count: 2 } });
    }
  }, [smallTablet]);

  const onBuyToken = async () => {
    if (!user) {
      await router.push(
        {
          pathname: '/auth',
          query: { backLink: router.asPath },
        },
        '/auth',
      );
      return;
    }

    const { data } = await buyToken({
      variables: { input: { id: token.id, price: token.price } },
      refetchQueries: [
        {
          query: GET_USER_BY_USERNAME,
          variables: { username: user?.username },
        },
      ],
    });

    if (data) {
      setIsFireworks(true);
    }
  };

  return {
    isMineToken,
    isBoughtToken,
    randomTokens,
    onBuyToken,
    isFireworks,
    loading,
  };
};
