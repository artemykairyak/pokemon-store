import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Recommendations } from '@components/shared/Recommendations/Recommendations';
import { GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GetRandomTokensQueryVariables, Token } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const MoreTokensSection = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [randomTokens] = useAppQuery<GetRandomTokensQueryVariables, Token[]>(
    GET_RANDOM_TOKENS,
    { input: { count: isMobile ? 4 : 3 } },
  );

  useEffect(() => {
    //todo: подумать
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const goToShop = async () => {
    await router.push('/shop');
  };

  return (
    <ContentWrapper>
      <Recommendations
        tokens={randomTokens}
        title="Discover More NFTs"
        subtitle="Explore new trending NFTs"
        button={
          <Button type="secondary" icon={EyeIcon} onClick={goToShop}>
            See all
          </Button>
        }
      />
    </ContentWrapper>
  );
};
