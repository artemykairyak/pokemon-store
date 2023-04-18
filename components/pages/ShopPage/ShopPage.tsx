import { useQuery } from '@apollo/client';
import CloseIcon from '@assets/icons/CloseIcon.svg';
import SearchIcon from '@assets/icons/SearchIcon.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Heading } from '@components/shared/Heading/Heading';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { DEFAULT_LIMIT } from '@constants/constants';
import { GET_STATS } from '@graphql/queries/stats';
import { GET_TOKEN_TYPES } from '@graphql/queries/tokenTypes';
import { GET_ALL_TOKENS } from '@graphql/queries/tokens';
import {
  GetAllTokensQuery,
  GetAllTokensQueryVariables,
  GetTokenTypesQueryVariables,
  Stats,
  TokenType,
} from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import clsx from 'clsx';
import debounce from 'lodash.debounce';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { ReactSVG } from 'react-svg';

import s from './ShopPage.module.scss';


export const ShopPage = () => {
  const [isFirstMounted, setIsFirstMounted] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats] = useAppQuery<{}, Stats[]>(GET_STATS);
  const {
    data: tokens,
    loading,
    error,
    fetchMore,
    refetch,
  } = useQuery<GetAllTokensQuery, GetAllTokensQueryVariables>(GET_ALL_TOKENS, {
    variables: {
      params: { limit: DEFAULT_LIMIT },
    },
  });
  const [types] = useAppQuery<
    GetTokenTypesQueryVariables,
    { data: TokenType[]; total: number }
  >(GET_TOKEN_TYPES, {
    params: { limit: 100 },
  });

  const isLoadMoreBtnShowed =
    !!tokens?.getAllTokens.data &&
    tokens?.getAllTokens.data.length < tokens?.getAllTokens.total;

  const loadMoreTokens = async () => {
    const nextPage = selectedPage + 1;

    await fetchMore({
      variables: { params: { page: nextPage, limit: DEFAULT_LIMIT } },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prevResult;
        }

        return {
          getAllTokens: {
            data: [
              ...prevResult.getAllTokens.data,
              ...fetchMoreResult.getAllTokens.data,
            ],
            total: fetchMoreResult.getAllTokens.total,
          },
        };
      },
    });

    setSelectedPage(nextPage);
  };

  const getTokensByTypes = async (types: string[]) => {
    if (isFirstMounted) {
      return;
    }

    const _types = types.join(',');

    await refetch({
      params: { page: 1, limit: DEFAULT_LIMIT },
      filters: { search: searchTerm, types: _types },
    });

    setSelectedPage(1);
  };

  const onSelectType = (type: string) => {
    setIsFirstMounted(false);
    setSelectedPage(1);

    if (selectedTypes.includes(type)) {
      setSelectedTypes((prev) => prev.filter((item) => item !== type));
      return;
    }

    setSelectedTypes((prev) => [...prev, type]);
  };

  const getSearchData = useCallback(
    debounce((searchTerm, types) => {
      refetch({
        params: { page: 1, limit: DEFAULT_LIMIT },
        filters: { search: searchTerm, types: types.join(',') },
      });
    }, 500),
    [],
  );

  useEffect(() => {
    getSearchData(searchTerm, selectedTypes);
  }, [searchTerm, getSearchData, selectedTypes]);

  const onChangeSearchTerm = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    getTokensByTypes(selectedTypes);
  }, [selectedTypes]);

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
          <div className={s.search}>
            <input
              type="text"
              placeholder="Type Token name"
              className={s.searchInput}
              onChange={onChangeSearchTerm}
              value={searchTerm}
            />
            {searchTerm ? (
              <button onClick={() => setSearchTerm('')}>
                <ReactSVG
                  src={CloseIcon.src}
                  className={clsx(s.icon, s.clearIcon)}
                />
              </button>
            ) : (
              <ReactSVG
                src={SearchIcon.src}
                className={clsx(s.icon, s.searchIcon)}
              />
            )}
          </div>
          <div className={s.types}>
            {types?.data.map((item) => {
              return (
                <button
                  key={item.id}
                  className={clsx(s.type, {
                    [s.selected]: selectedTypes.includes(item.name),
                  })}
                  onClick={() => onSelectType(item.name)}
                >
                  <img
                    className={s.typePic}
                    src={item.picture}
                    alt={`${item.name} token type picture`}
                  />
                  <span className={s.typeName}>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </ContentWrapper>
      <ContentWrapper className={s.content}>
        <div className={s.tokens}>
          {!!tokens?.getAllTokens.data &&
            tokens.getAllTokens.data.map((item) => {
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
        {isLoadMoreBtnShowed && (
          <div className={s.loadMore}>
            <Button type="secondary" onClick={loadMoreTokens}>
              Load more
            </Button>
          </div>
        )}
      </ContentWrapper>
    </>
  );
};
