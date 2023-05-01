import EyeIcon from '@assets/icons/Eye.svg';
import { ContentWrapper } from '@components/layouts/ContentWrapper/ContentWrapper';
import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { Button } from '@components/shared/PrimaryButton/Button';
import { TokenTypeCard } from '@components/shared/TokenTypeCard/TokenTypeCard';
import { GET_TOKEN_TYPES } from '@graphql/queries/tokenTypes';
import { GetTokenTypesQueryVariables, TokenType } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { useRouter } from 'next/router';

import s from './TokenTypesSection.module.scss';

export const TokenTypesSection = () => {
  const router = useRouter();
  const [tokenTypes] = useAppQuery<
    GetTokenTypesQueryVariables,
    { data: TokenType[]; total: number }
  >(GET_TOKEN_TYPES, {
    params: { limit: 10 },
  });

  const goToShop = async () => {
    await router.push('/shop');
  };

  return (
    <ContentWrapper>
      <HeadingGroup title="Browse Types">
        <Button type="secondary" icon={EyeIcon} onClick={goToShop}>
          See all
        </Button>
      </HeadingGroup>
      <div className={s.tokenTypes}>
        {!!tokenTypes?.data?.length &&
          tokenTypes.data.map((item) => {
            return <TokenTypeCard tokenType={item} className={s.tokenType} />;
          })}
      </div>
    </ContentWrapper>
  );
};
