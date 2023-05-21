import { useQuery } from '@apollo/client';
import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Recommendations } from '@components/shared/Recommendations/Recommendations';
import { GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GetRandomTokensQueryVariables, Token } from '@graphqlTypes/graphql';
import { useMedia } from '@hooks/useMedia';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const MoreTokensSection = () => {
  const router = useRouter();
  const { tablet, mobile } = useMedia();
  const {
    data: randomTokens,
    refetch,
    loading,
  } = useQuery<{ getRandomTokens: Token[] }, GetRandomTokensQueryVariables>(
    GET_RANDOM_TOKENS,
    { variables: { input: { count: 3 } } },
  );

  useEffect(() => {
    if (mobile) {
      refetch({ input: { count: 3 } });
      return;
    }

    if (tablet) {
      refetch({ input: { count: 4 } });
    }
  }, [tablet, mobile]);

  const goToShop = async () => {
    await router.push('/shop');
  };

  return (
    <ContentWrapper>
      <Recommendations
        tokens={randomTokens?.getRandomTokens}
        title="Discover More NFTs"
        subtitle="Explore new trending NFTs"
        button={
          <Button type="secondary" icon={EyeIcon} onClick={goToShop}>
            See all
          </Button>
        }
        loading={loading}
      />
    </ContentWrapper>
  );
};
