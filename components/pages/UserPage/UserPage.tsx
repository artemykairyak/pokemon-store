import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { useAuth } from '@components/pages/AuthPage/hooks/useAuth';
import { UserBio } from '@components/pages/UserPage/components/UserBio/UserBio';
import { UserCover } from '@components/pages/UserPage/components/UserCover/UserCover';
import { UserLinks } from '@components/pages/UserPage/components/UserLinks/UserLinks';
import { Avatar } from '@components/shared/Avatar/Avatar';
import { Heading } from '@components/shared/Heading/Heading';
import { Label } from '@components/shared/Label/Label';
import { Loader } from '@components/shared/Loader/Loader';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Tab, Tabs } from '@components/shared/Tabs/Tabs';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { GET_USER_TOKENS } from '@graphql/queries/tokens';
import { GET_USER_BY_USERNAME } from '@graphql/queries/users';
import {
  PaginatedTokensData,
  QueryGetUserByUsernameArgs,
  QueryGetUserTokensArgs,
  User,
} from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { useUser } from '@hooks/useUser';
import clsx from 'clsx';
import { FC, useState } from 'react';

import s from './UserPage.module.scss';

export interface UserPageProps {
  username: string;
}

enum UserTab {
  OWNED = 'owned',
  CREATED = 'created',
}

export const UserPage: FC<UserPageProps> = ({ username }) => {
  const [selectedTab, setSelectedTab] = useState<UserTab>(UserTab.OWNED);
  const [user, errors, loading] = useAppQuery<QueryGetUserByUsernameArgs, User>(
    GET_USER_BY_USERNAME,
    {
      username,
    },
  );
  const [userTokens, _, userTokensLoading] = useAppQuery<
    QueryGetUserTokensArgs,
    PaginatedTokensData
  >(GET_USER_TOKENS, {
    getAuthorTokensInput: {
      username,
      owned: selectedTab === UserTab.OWNED,
    },
    params: { limit: 100 },
  });

  const { isMe } = useUser(user);
  const { logout } = useAuth();
  const noTokens = !userTokens?.data.length && !userTokensLoading;

  const tabs: Tab[] = [
    {
      name: UserTab.OWNED,
      text: UserTab.OWNED,
      count: user?.boughtTokensCount,
    },
    {
      name: UserTab.CREATED,
      text: UserTab.CREATED,
      count: user?.createdTokensCount,
    },
  ];

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      <UserCover user={user} editable={isMe} />
      <ContentWrapper wrapperClassName={s.infoSection}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={s.info}>
              <div className={s.avatarWrapper}>
                <Avatar user={user} className={s.avatar} editable={isMe} />
              </div>
              <Heading level={1}>{username}</Heading>
              <div className={clsx(s.infoRow, s.statsRow)}>
                <div className={s.tokensInfo}>
                  <span className={s.tokensCount}>
                    {user.createdTokensCount}
                  </span>
                  <span className={s.tokensText}>Tokens created</span>
                </div>
                <div className={s.tokensInfo}>
                  <span className={s.tokensCount}>
                    {user.boughtTokensCount}
                  </span>
                  <span className={s.tokensText}>Tokens bought</span>
                </div>
              </div>
              <div className={s.infoRow}>
                <UserBio user={user} editable={isMe} />
              </div>
              <div className={s.infoRow}>
                <Label>Links</Label>
                <UserLinks user={user} editable={isMe} />
              </div>
              {isMe && (
                <Button
                  type="secondary"
                  onClick={logout}
                  className={s.logoutBtn}
                >
                  Logout
                </Button>
              )}
            </div>
            <Tabs
              tabs={tabs}
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </>
        )}
      </ContentWrapper>
      <ContentWrapper
        className={s.tokensSection}
        wrapperClassName={s.tokensWrapper}
      >
        {userTokensLoading ? (
          <Loader />
        ) : (
          <div className={s.tokens}>
            {noTokens && <p>There are no tokens yet...</p>}
            {userTokens?.data.map((token) => {
              return (
                <TokenCard
                  card={token}
                  key={token.id}
                  className={s.token}
                  darken={true}
                />
              );
            })}
          </div>
        )}
      </ContentWrapper>
    </>
  );
};
