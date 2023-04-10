import ArrowRight from '@assets/icons/ArrowRight.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Avatar } from '@components/shared/Avatar/Avatar';
import { Heading } from '@components/shared/Heading/Heading';
import { Label } from '@components/shared/Label/Label';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Recommendations } from '@components/shared/Recommendations/Recommendations';
import { GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import { GetRandomTokensQueryVariables, Token } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import s from './TokenPage.module.scss';


export interface TokenPageProps {
  token: Token;
}

export const TokenPage: FC<TokenPageProps> = ({ token }) => {
  const router = useRouter();
  const [randomTokens] = useAppQuery<GetRandomTokensQueryVariables, Token[]>(
    GET_RANDOM_TOKENS,
    { input: { count: 3, username: token.author.username } },
  );

  const goToAuthor = async () => {
    await router.push(`/user/${token.author.username}`);
  };

  return (
    <div>
      <div
        className={s.cover}
        style={{ backgroundImage: `url(${token.picture})` }}
      />
      <ContentWrapper>
        <div className={s.titleWrapper}>
          <Heading level={1}>{token.name}</Heading>
          <Button
            className={s.buyBtn}
            type="primary"
          >{`Buy now $${token.price}`}</Button>
        </div>
        <div>
          <Label>Type</Label>
          <div className={s.typeWrapper}>
            <img
              className={s.typeIcon}
              src={token.type.picture}
              alt={`${token.type.name} type`}
            />
            <span className={s.typeName}>{token.type.name}</span>
          </div>
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
        <div className={s.recs}>
          <Recommendations
            tokens={randomTokens}
            title="More from this artist"
            button={
              <Button type="secondary" icon={ArrowRight} onClick={goToAuthor}>
                Go To Artist Page
              </Button>
            }
          />
        </div>
      </ContentWrapper>
    </div>
  );
};
