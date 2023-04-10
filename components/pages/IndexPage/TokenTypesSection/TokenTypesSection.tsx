import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenTypeCard } from '@components/shared/TokenTypeCard/TokenTypeCard';
import { GET_TOKEN_TYPES } from '@graphql/queries/tokenTypes';
import { GetTokenTypesQueryVariables, TokenType } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';

import s from './TokenTypesSection.module.scss';


export const TokenTypesSection = () => {
  const [tokenTypes, loading, error] = useAppQuery<
    GetTokenTypesQueryVariables,
    TokenType[]
  >(GET_TOKEN_TYPES);

  return (
    <ContentWrapper>
      <HeadingGroup title="Browse Types">
        <Button type="secondary" icon={EyeIcon}>
          See all
        </Button>
      </HeadingGroup>
      <div className={s.tokenTypes}>
        {!!tokenTypes?.length &&
          tokenTypes.map((item, i) => {
            if (i < 10) {
              return <TokenTypeCard tokenType={item} className={s.tokenType} />;
            }
          })}
      </div>
    </ContentWrapper>
  );
};
