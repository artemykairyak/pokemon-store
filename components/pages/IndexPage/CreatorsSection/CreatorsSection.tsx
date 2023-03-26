import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { UserCard } from '@components/pages/IndexPage/CreatorsSection/components/UserCard/UserCard';
import { Heading } from '@components/shared/Heading/Heading';
import { Button } from '@components/shared/PrimaryButton/Button';
import { GET_SHORT_AUTHORS } from '@graphql/queries/users';
import { GetAllUsersQueryVariables, User } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';

import s from './CreatorsSection.module.scss';


export const CreatorsSection = () => {
  const [authors, loading, error] = useAppQuery<
    GetAllUsersQueryVariables,
    { data: User[]; total: number }
  >(GET_SHORT_AUTHORS, { params: { limit: 12 } });

  return (
    <ContentWrapper>
      <div className={s.headingWrapper}>
        <div>
          <Heading level={2} className={s.title}>
            Top Creators
          </Heading>
          <span className={s.subtitle}>
            Checkout Top Rated Creators on the NFT Marketplace
          </span>
        </div>
        <Button type="secondary" icon={EyeIcon}>
          See all
        </Button>
      </div>
      <div className={s.creators}>
        {authors?.data &&
          authors?.data.map((item, i) => {
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
