import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { UserCover } from '@components/pages/UserPage/components/UserCover/UserCover';
import { Avatar } from '@components/shared/Avatar/Avatar';
import { Heading } from '@components/shared/Heading/Heading';
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
import { getLinkLogoByType } from '@utils/utils';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';

import s from './UserPage.module.scss';


export interface UserPageProps {
  username: string;
}

enum UserTab {
  OWNED = 'owned',
  CREATED = 'created',
}

const tabs: Tab[] = [
  {
    name: UserTab.OWNED,
    text: UserTab.OWNED,
  },
  {
    name: UserTab.CREATED,
    text: UserTab.CREATED,
  },
];

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
    params: {},
  });

  const { isMe } = useUser(user);

  console.log('ME', isMe);

  const noTokens = !userTokens?.data.length && !userTokensLoading;

  if (!user) {
    return <div>Loading</div>;
  }

  return (
    <>
      <UserCover user={user} editable={isMe} />
      <ContentWrapper wrapperClassName={s.infoSection}>
        <div className={s.info}>
          <div className={s.avatarWrapper}>
            <Avatar user={user} className={s.avatar} editable={isMe} />
          </div>
          <Heading level={1}>{username}</Heading>
          <div className={clsx(s.infoRow, s.statsRow)}>
            <div className={s.tokensInfo}>
              <span className={s.tokensCount}>{user.createdTokensCount}</span>
              <span className={s.tokensText}>Tokens created</span>
            </div>
            <div className={s.tokensInfo}>
              <span className={s.tokensCount}>{user.boughtTokensCount}</span>
              <span className={s.tokensText}>Tokens bought</span>
            </div>
          </div>
          <div className={s.infoRow}>
            <span className={s.label}>Bio</span>
            <p className={s.bio}>{user.bio || 'Here is empty...'}</p>
          </div>
          {!!user.links?.length && (
            <div className={s.infoRow}>
              <span className={s.label}>Links</span>
              <div className={s.links}>
                {user.links.map((link) => {
                  return (
                    <a
                      className={s.link}
                      href={link.url}
                      key={link.id}
                      target="_blank"
                    >
                      <ReactSVG src={getLinkLogoByType(link.type.name)} />
                    </a>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </ContentWrapper>
      <ContentWrapper
        className={s.tokensSection}
        wrapperClassName={s.tokensWrapper}
      >
        <div className={s.tokens}>
          {noTokens && (
            <p className={s.emptyText}>There are no tokens yet...</p>
          )}
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
      </ContentWrapper>
    </>
  );
};
