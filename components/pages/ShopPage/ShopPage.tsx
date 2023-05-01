import CloseIcon from '@assets/icons/CloseIcon.svg';
import SearchIcon from '@assets/icons/SearchIcon.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { useShopPage } from '@components/pages/ShopPage/hooks/useShopPage';
import { Heading } from '@components/shared/Heading/Heading';
import { Loader } from '@components/shared/Loader/Loader';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { Token } from '@graphqlTypes/graphql';
import clsx from 'clsx';
import { ReactSVG } from 'react-svg';

import s from './ShopPage.module.scss';


export const ShopPage = () => {
  const {
    tokens,
    types,
    stats,
    loading,
    isLoadMoreBtnShowed,
    loadMoreTokens,
    isTokensEmpty,
    selectedTypes,
    onSelectType,
    searchTerm,
    onChangeSearchTerm,
  } = useShopPage();

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
              onChange={(e) => onChangeSearchTerm(e.target.value)}
              value={searchTerm}
            />
            {searchTerm ? (
              <button onClick={() => onChangeSearchTerm('')}>
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
        {loading ? (
          <Loader />
        ) : (
          <div className={s.tokens}>
            {isTokensEmpty && <p>There are no tokens</p>}
            {!!tokens?.getAllTokens.data &&
              tokens.getAllTokens.data.map((item) => {
                return (
                  <TokenCard
                    card={item as Token}
                    key={item.id}
                    className={s.token}
                    darken={true}
                  />
                );
              })}
          </div>
        )}
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
