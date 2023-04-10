import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Heading } from '@components/shared/Heading/Heading';
import { Tab, Tabs } from '@components/shared/Tabs/Tabs';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { TokenTypeCard } from '@components/shared/TokenTypeCard/TokenTypeCard';
import { GET_STATS } from '@graphql/queries/stats';
import { GET_TOKEN_TYPES } from '@graphql/queries/tokenTypes';
import { GET_ALL_TOKENS } from '@graphql/queries/tokens';
import {
  GetAllTokensQueryVariables,
  GetTokenTypesQueryVariables,
  Stats,
  Token,
  TokenType,
} from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { useState } from 'react';

import s from './ShopPage.module.scss';


enum ShopTab {
  NFTS = 'nfts',
  TYPES = 'types',
}

export const ShopPage = () => {
  const [selectedTab, setSelectedTab] = useState<ShopTab>(ShopTab.NFTS);
  const [stats] = useAppQuery<{}, Stats[]>(GET_STATS);
  const [tokens] = useAppQuery<
    GetAllTokensQueryVariables,
    { data: Token[]; total: number }
  >(GET_ALL_TOKENS, {
    params: {},
  });
  const [types] = useAppQuery<
    GetTokenTypesQueryVariables,
    { data: TokenType[]; total: number }
  >(GET_TOKEN_TYPES, {
    params: { limit: 100 },
  });

  const tabs: Tab[] = [
    {
      name: ShopTab.NFTS,
      text: 'NFTs',
      count: tokens?.total,
    },
    {
      name: ShopTab.TYPES,
      text: 'Types',
      count: types?.total,
    },
  ];

  return (
    <>
      <ContentWrapper wrapperClassName={s.headerContent}>
        <div className={s.header}>
          <Heading level={1}>Browse Shop</Heading>
          <span className={s.subtitle}>
            {`Browse through ${
              stats && stats[0].tokensCount
            } NFTs on the Pokemon Store.`}
          </span>
          <Tabs
            tabs={tabs}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
      </ContentWrapper>
      <ContentWrapper className={s.content}>
        {selectedTab === ShopTab.NFTS && (
          <div className={s.tokens}>
            {tokens?.data.map((item) => {
              return (
                <TokenCard
                  card={item}
                  key={item.id}
                  className={s.token}
                  darken={true}
                />
              );
            })}
          </div>
        )}
        {selectedTab === ShopTab.TYPES && (
          <div className={s.types}>
            {types?.data.map((item) => {
              return (
                <TokenTypeCard
                  darken={true}
                  tokenType={item}
                  key={item.id}
                  className={s.type}
                />
              );
            })}
          </div>
        )}
      </ContentWrapper>
    </>
  );
};
