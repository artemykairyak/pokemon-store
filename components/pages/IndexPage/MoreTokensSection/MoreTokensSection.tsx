import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Recommendations } from '@components/shared/Recommendations/Recommendations';
import { GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GetRandomTokensQueryVariables, Token } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { useRouter } from 'next/router';


export const MoreTokensSection = () => {
  const router = useRouter();
  const [randomTokens] = useAppQuery<GetRandomTokensQueryVariables, Token[]>(
    GET_RANDOM_TOKENS,
    { input: { count: 3 } },
  );

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
