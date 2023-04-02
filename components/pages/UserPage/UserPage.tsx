import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Avatar } from '@components/shared/Avatar/Avatar';
import { Heading } from '@components/shared/Heading/Heading';
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
import { getLinkLogoByType } from '@utils/utils';
import clsx from 'clsx';
import { FC, MouseEvent, useState } from 'react';
import { ReactSVG } from 'react-svg';

import s from './UserPage.module.scss';

import DefaultCover from 'assets/images/userCover.jpg';


export interface UserPageProps {
  username: string;
}

export const UserPage: FC<UserPageProps> = ({ username }) => {
  const [selectedTab, setSelectedTab] = useState<'owned' | 'created'>('owned');
  const [user, errors, loading] = useAppQuery<QueryGetUserByUsernameArgs, User>(
    GET_USER_BY_USERNAME,
    {
      username,
    },
  );
  const [userTokens] = useAppQuery<QueryGetUserTokensArgs, PaginatedTokensData>(
    GET_USER_TOKENS,
    {
      getAuthorTokensInput: {
        username,
        owned: selectedTab === 'owned',
      },
      params: {},
    },
  );

  if (!user) {
    return <div>Loading</div>;
  }

  const toggleTokensMode = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setSelectedTab(target.name as 'owned' | 'created');
  };

  return (
    <div>
      <div
        className={s.cover}
        style={{ backgroundImage: user?.cover || `url(${DefaultCover.src})` }}
      >
        <div className={s.avatarWrapper}>
          <Avatar user={user} className={s.avatar} />
        </div>
      </div>
      <ContentWrapper>
        <div className={s.info}>
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
      </ContentWrapper>
      <ContentWrapper
        className={s.tokensSection}
        wrapperClassName={s.tokensWrapper}
      >
        <div className={s.tabs}>
          <button className={s.tab} name="owned" onClick={toggleTokensMode}>
            Owned
          </button>
          <button className={s.tab} name="created" onClick={toggleTokensMode}>
            Created
          </button>
        </div>
        <div className={s.tokens}>
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
    </div>
  );
};
