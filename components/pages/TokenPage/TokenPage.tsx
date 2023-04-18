import { useMutation } from '@apollo/client';
import ArrowRight from '@assets/icons/ArrowRight.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { UserInfo } from '@components/pages/TokenPage/components/UserInfo/UserInfo';
import { Heading } from '@components/shared/Heading/Heading';
import { Label } from '@components/shared/Label/Label';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Recommendations } from '@components/shared/Recommendations/Recommendations';
import { AuthContext } from '@context/AuthContext';
import { BUY_TOKEN, GET_RANDOM_TOKENS } from '@graphql/queries/tokens';
import {
  BuyTokenMutationVariables,
  GetRandomTokensQueryVariables,
  Token,
} from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { useRouter } from 'next/router';
import { FC, useContext } from 'react';

import s from './TokenPage.module.scss';


export interface TokenPageProps {
  token: Token;
}

export const TokenPage: FC<TokenPageProps> = ({ token }) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const isMineToken = token.author.id === user?.id;
  const isBoughtToken = !!token.owner.id;
  const [randomTokens] = useAppQuery<GetRandomTokensQueryVariables, Token[]>(
    GET_RANDOM_TOKENS,
    {
      input: {
        count: 3,
        username: token.author.username,
        excludedId: token.id,
      },
    },
  );

  const htmlContent = token.description.replaceAll('\\n', '<br>');
  const [buyToken] = useMutation<Token, BuyTokenMutationVariables>(BUY_TOKEN);
  const onBuyToken = async () => {
    if (!user) {
      await router.push('/auth');
      return;
    }

    const res = await buyToken({
      variables: { input: { id: token.id, price: token.price } },
    });
  };

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
          {!isBoughtToken && (
            <Button
              disabled={isMineToken}
              className={s.buyBtn}
              type="primary"
              onClick={onBuyToken}
            >{`Buy now $${token.price}`}</Button>
          )}
          {isBoughtToken && (
            <div className={s.owner}>
              <UserInfo user={token.owner} label="Bought by" />
            </div>
          )}
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
          <UserInfo user={token.author} label="Created by" />
          <div className={s.desc}>
            <Label>Description</Label>
            <p
              dangerouslySetInnerHTML={{
                __html: htmlContent,
              }}
              className={s.descText}
            ></p>
          </div>
        </div>
        {!!randomTokens?.length && (
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
        )}
      </ContentWrapper>
    </div>
  );
};
