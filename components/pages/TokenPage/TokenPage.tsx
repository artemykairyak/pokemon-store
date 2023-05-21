import ArrowRight from '@assets/icons/ArrowRight.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { UserInfo } from '@components/pages/TokenPage/components/UserInfo/UserInfo';
import { useTokenPage } from '@components/pages/TokenPage/hooks/useTokenPage';
import { Heading } from '@components/shared/Heading/Heading';
import { Label } from '@components/shared/Label/Label';
import { Loader } from '@components/shared/Loader/Loader';
import { Popup } from '@components/shared/Popup/Popup';
import { Button } from '@components/shared/PrimaryButton/Button';
import { Recommendations } from '@components/shared/Recommendations/Recommendations';
import { Token } from '@graphqlTypes/graphql';
import { useRouter } from 'next/router';
import { FC } from 'react';

import s from './TokenPage.module.scss';

export interface TokenPageProps {
  token: Token;
  loading: boolean;
}

export const TokenPage: FC<TokenPageProps> = ({ token, loading }) => {
  const router = useRouter();

  const description = token.description.replaceAll('\\n', '<br>');

  const { isMineToken, isBoughtToken, randomTokens, onBuyToken, isFireworks } =
    useTokenPage(token);

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
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={s.titleWrapper}>
              <Heading level={1}>{token.name}</Heading>
              {isBoughtToken && <span className={s.sold}>Sold</span>}
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
                    __html: description,
                  }}
                  className={s.descText}
                ></p>
              </div>
            </div>
            {!!randomTokens?.getRandomTokens.length && (
              <div className={s.recs}>
                <Recommendations
                  tokens={randomTokens.getRandomTokens}
                  title="More from this artist"
                  button={
                    <Button
                      type="secondary"
                      icon={ArrowRight}
                      onClick={goToAuthor}
                    >
                      Go To Artist Page
                    </Button>
                  }
                />
              </div>
            )}
          </>
        )}
      </ContentWrapper>
      {isFireworks && (
        <Popup
          type="success"
          title="Congratulations!"
          text={`You are owner of ${token.name} now!`}
        />
      )}
    </div>
  );
};
