import { useQuery } from '@apollo/client';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { UserCard } from '@components/pages/IndexPage/CreatorsSection/components/UserCard/UserCard';
import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { Loader } from '@components/shared/Loader/Loader';
import { GET_SHORT_AUTHORS } from '@graphql/queries/users';
import { GetAllUsersQueryVariables, User } from '@graphqlTypes/graphql';
import { useMedia } from '@hooks/useMedia';
import { useEffect } from 'react';

import s from './CreatorsSection.module.scss';

export const CreatorsSection = () => {
  const { mobile } = useMedia();
  const {
    data: authors,
    refetch,
    loading,
  } = useQuery<{ getAllUsers: { data: User[] } }, GetAllUsersQueryVariables>(
    GET_SHORT_AUTHORS,
    { variables: { params: { limit: 12 } } },
  );

  useEffect(() => {
    if (mobile) {
      refetch({ params: { limit: 3 } });
    }
  }, [mobile]);

  return (
    <ContentWrapper>
      <HeadingGroup
        title="Top Creators"
        subtitle="Checkout Top Rated Creators on the NFT Marketplace"
      ></HeadingGroup>
      {loading ? (
        <Loader />
      ) : (
        <div className={s.creators}>
          {authors?.getAllUsers.data &&
            authors.getAllUsers.data.map((item, i) => {
              return (
                <UserCard
                  user={item}
                  index={i}
                  key={item.id}
                  className={s.card}
                />
              );
            })}
        </div>
      )}
    </ContentWrapper>
  );
};
