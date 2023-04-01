import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GetRandomTokensQueryVariables, Token } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';

import s from './MoreTokensSection.module.scss';


export const MoreTokensSection = () => {
  const [randomTokens, loading, error] = useAppQuery<
    GetRandomTokensQueryVariables,
    Token[]
  >(GET_RANDOM_TOKENS, { count: 3 });

  return (
    <ContentWrapper>
      <HeadingGroup
        title="Discover More NFTs"
        subtitle="Explore new trending NFTs"
      >
        <Button type="secondary" icon={EyeIcon}>
          See all
        </Button>
      </HeadingGroup>
      <div className={s.recsTable}>
        {randomTokens?.map((item) => {
          return <TokenCard card={item} className={s.token} />;
        })}
      </div>
    </ContentWrapper>
  );
};
