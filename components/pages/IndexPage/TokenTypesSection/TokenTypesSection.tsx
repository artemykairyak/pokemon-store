import { useQuery } from '@apollo/client';
import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { Loader } from '@components/shared/Loader/Loader';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenTypeCard } from '@components/shared/TokenTypeCard/TokenTypeCard';
import { GET_TOKEN_TYPES } from '@graphql/queries/tokenTypes';
import {
  GetTokenTypesQuery,
  GetTokenTypesQueryVariables,
} from '@graphqlTypes/graphql';
import { useMedia } from '@hooks/useMedia';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import s from './TokenTypesSection.module.scss';

export const TokenTypesSection = () => {
  const router = useRouter();
  const { smallTablet, mobile } = useMedia();
  const {
    data: tokenTypes,
    refetch,
    loading,
  } = useQuery<GetTokenTypesQuery, GetTokenTypesQueryVariables>(
    GET_TOKEN_TYPES,
    {
      variables: {
        params: { limit: 10 },
      },
    },
  );

  useEffect(() => {
    if (mobile) {
      refetch({ params: { limit: 6 } });
      return;
    }

    if (smallTablet) {
      refetch({ params: { limit: 9 } });
    }
  }, [smallTablet, mobile]);

  const goToShop = async () => {
    await router.push('/shop');
  };

  return (
    <ContentWrapper>
      <HeadingGroup title="Browse Types">
        <Button type="secondary" icon={EyeIcon} onClick={goToShop}>
          See all
        </Button>
      </HeadingGroup>
      {loading ? (
        <Loader />
      ) : (
        <div className={s.tokenTypes}>
          {!!tokenTypes?.getTokenTypes.data?.length &&
            tokenTypes.getTokenTypes.data.map((item) => {
              return (
                <TokenTypeCard
                  tokenType={item}
                  className={s.tokenType}
                  key={item.id}
                />
              );
            })}
        </div>
      )}
    </ContentWrapper>
  );
};
