import RocketIcon from '@assets/icons/RocketLaunch.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Heading } from '@components/shared/Heading/Heading';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { GET_STATS } from '@graphql/queries/stats';
import { GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import {
  GetRandomTokensQueryVariables,
  Stats,
  Token,
} from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { getStatsArray } from '@utils/utils';
import Link from 'next/link';

import s from './MainSection.module.scss';

export const MainSection = () => {
  const [stats] = useAppQuery<{}, Stats[]>(GET_STATS);
  const [randomTokens] = useAppQuery<GetRandomTokensQueryVariables, Token[]>(
    GET_RANDOM_TOKENS,
    { input: { count: 1 } },
  );

  return (
    <ContentWrapper>
      <div className={s.wrapper}>
        <div className={s.info}>
          <Heading level={1} className={s.title}>
            Discover Digital Art & Collect NFTs
          </Heading>
          <p className={s.desc}>
            Discover and collect unique NFT Pokemon in our marketplace, where
            you can trade, showcase, and embark on digital adventures with these
            one-of-a-kind virtual creatures.
          </p>
          <Link href={'/shop'}>
            <Button type="primary" icon={RocketIcon} className={s.button}>
              Get Started
            </Button>
          </Link>
          <div className={s.stats}>
            {stats &&
              getStatsArray(stats)?.map((item, i) => {
                return (
                  <div key={i} className={s.statsItem}>
                    <span className={s.statsValue}>{item.value}</span>
                    <span className={s.statsTitle}>{item.title}</span>
                  </div>
                );
              })}
          </div>
        </div>
        <div className={s.pic}>
          {!!randomTokens?.length && (
            <TokenCard card={randomTokens[0]} className={s.card} />
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};
