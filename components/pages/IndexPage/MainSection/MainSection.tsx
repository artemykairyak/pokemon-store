import RocketIcon from '@assets/icons/RocketLaunch.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Heading } from '@components/shared/Heading/Heading';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GetRandomTokensQueryVariables, Token } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';

import s from './MainSection.module.scss';


const stats = [
  {
    value: '240k+',
    title: 'Total Sale',
  },
  {
    value: '100k+',
    title: 'Auctions',
  },
  {
    value: '240k+',
    title: 'Artists',
  },
];

export const MainSection = () => {
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
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <Button type="primary" icon={RocketIcon} className={s.button}>
            Get Started
          </Button>
          <div className={s.stats}>
            {stats.map((item, i) => {
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
