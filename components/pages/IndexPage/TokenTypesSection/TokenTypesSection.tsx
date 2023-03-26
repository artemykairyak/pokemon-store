import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { Heading } from '@components/shared/Heading/Heading';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenTypeCard } from '@components/shared/TokenTypeCard/TokenTypeCard';
import { GET_TOKEN_TYPES } from '@graphql/queries/tokenTypes';
import {
  GetAllTokenTypesQueryVariables,
  TokenType,
} from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';

import s from './TokenTypesSection.module.scss';


export const TokenTypesSection = () => {
  const [tokenTypes, loading, error] = useAppQuery<
    GetAllTokenTypesQueryVariables,
    TokenType[]
  >(GET_TOKEN_TYPES);

  return (
    <ContentWrapper className={s.wrapper}>
      <div className={s.headingWrapper}>
        <Heading level={2}>Browse Types</Heading>
        <Button type="secondary" icon={EyeIcon}>
          See all
        </Button>
      </div>
      <div className={s.tokenTypes}>
        {!!tokenTypes?.length &&
          tokenTypes?.map((item, i) => {
            if (i < 10) {
              return <TokenTypeCard tokenType={item} className={s.tokenType} />;
            }
          })}
      </div>
    </ContentWrapper>
  );
};
