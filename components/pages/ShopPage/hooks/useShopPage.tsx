import { useQuery } from '@apollo/client';
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
import debounce from 'lodash.debounce';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

export const useShopPage = () => {
  const router = useRouter();
  const { type } = router.query as { type?: string };
  const [isFirstMounted, setIsFirstMounted] = useState(true);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats] = useAppQuery<{}, Stats[]>(GET_STATS);
  const {
    data: tokens,
    loading,
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
  const isTokensEmpty = !loading && !tokens?.getAllTokens.data.length;

  const loadMoreTokens = async () => {
    const nextPage = selectedPage + 1;

    await fetchMore({
      variables: {
        params: {
          page: nextPage,
          limit: DEFAULT_LIMIT,
        },
      },
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

  const onSelectType = async (type: string) => {
    setIsFirstMounted(false);
    setSelectedPage(1);

    if (selectedTypes.includes(type)) {
      const types = selectedTypes.filter((item) => item !== type);
      await router.push({
        pathname: '/shop',
        query: { type: types.join(',') },
      });
      return;
    }

    await router.push({
      pathname: '/shop',
      query: { type: [...selectedTypes, type].join(',') },
    });
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

  const onChangeSearchTerm = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    if (type) {
      setSelectedTypes(type.split(','));
      return;
    }

    setSelectedTypes([]);
  }, [type]);

  useEffect(() => {
    getSearchData(searchTerm, selectedTypes);
  }, [searchTerm, getSearchData, selectedTypes]);

  useEffect(() => {
    getTokensByTypes(selectedTypes);
  }, [selectedTypes]);

  return {
    tokens,
    stats,
    loading,
    types,
    isLoadMoreBtnShowed,
    isTokensEmpty,
    selectedTypes,
    onSelectType,
    loadMoreTokens,
    searchTerm,
    onChangeSearchTerm,
  };
};
