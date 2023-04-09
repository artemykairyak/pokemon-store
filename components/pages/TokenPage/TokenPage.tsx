import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Avatar } from '@components/shared/Avatar/Avatar';
import { Heading } from '@components/shared/Heading/Heading';
import { Label } from '@components/shared/Label/Label';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Token } from '@graphqlTypes/graphql';
import Link from 'next/link';
import { FC } from 'react';

import s from './TokenPage.module.scss';


export interface TokenPageProps {
  token: Token;
}

export const TokenPage: FC<TokenPageProps> = ({ token }) => {
  return (
    <div>
      <div
        className={s.cover}
        style={{ backgroundImage: `url(${token.picture})` }}
      />
      <ContentWrapper>
        <div className={s.titleWrapper}>
          <Heading level={1}>{token.name}</Heading>
          <Button type="primary">{`Buy now $${token.price}`}</Button>
        </div>
        <div className={s.info}>
          <div className={s.authorWrapper}>
            <Label>Created by</Label>
            <Link href={`/user/${token.author.username}`} className={s.author}>
              <Avatar user={token.author} className={s.authorAvatar} />
              <span className={s.authorName}>{token.author.username}</span>
            </Link>
          </div>
          <div className={s.desc}>
            <Label>Description</Label>
            <p className={s.descText}>{token.description}</p>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
