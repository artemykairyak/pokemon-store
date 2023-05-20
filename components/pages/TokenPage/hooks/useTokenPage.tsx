import { useMutation } from '@apollo/client';
import { useFireworks } from '@components/pages/TokenPage/hooks/useFireworks';
import { AuthContext } from '@context/AuthContext';
import { BUY_TOKEN, GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GET_USER_BY_USERNAME } from '@graphql/queries/users';
import {
  BuyTokenMutationVariables,
  GetRandomTokensQueryVariables,
  Token,
} from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export const useTokenPage = (token: Token) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { isFireworks, setIsFireworks } = useFireworks();
  const isMineToken = token.author.id === user?.id;
  const isBoughtToken = !!token.owner.id;
  const [randomTokens] = useAppQuery<GetRandomTokensQueryVariables, Token[]>(
    GET_RANDOM_TOKENS,
    {
      input: {
        count: 3,
        username: token.author.username,
        excludedId: token.id,
      },
    },
  );
  const [buyToken] = useMutation<Token, BuyTokenMutationVariables>(BUY_TOKEN);

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

  return { isMineToken, isBoughtToken, randomTokens, onBuyToken, isFireworks };
};
