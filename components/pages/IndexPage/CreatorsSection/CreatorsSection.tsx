import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { UserCard } from '@components/pages/IndexPage/CreatorsSection/components/UserCard/UserCard';
import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { GET_SHORT_AUTHORS } from '@graphql/queries/users';
import { GetAllUsersQueryVariables, User } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';

import s from './CreatorsSection.module.scss';

export const CreatorsSection = () => {
  const [authors] = useAppQuery<
    GetAllUsersQueryVariables,
    { data: User[]; total: number }
  >(GET_SHORT_AUTHORS, { params: { limit: 12 } });

  return (
    <ContentWrapper>
      <HeadingGroup
        title="Top Creators"
        subtitle="Checkout Top Rated Creators on the NFT Marketplace"
      ></HeadingGroup>
      <div className={s.creators}>
        {authors?.data &&
          authors.data.map((item, i) => {
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
    </ContentWrapper>
  );
};
