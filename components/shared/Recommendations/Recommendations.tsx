import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { Loader } from '@components/shared/Loader/Loader';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { Token } from '@graphqlTypes/graphql';
import { FC, ReactNode } from 'react';

import s from './Recommendations.module.scss';

interface RecommendationsProps {
  title: string;
  loading: boolean;
  tokens?: Token[];
  subtitle?: string;
  button?: ReactNode;
}

export const Recommendations: FC<RecommendationsProps> = ({
  tokens,
  title,
  subtitle,
  button,
  loading,
}) => {
  return (
    <div>
      <HeadingGroup title={title} subtitle={subtitle}>
        {button && button}
      </HeadingGroup>
      {loading ? (
        <Loader />
      ) : (
        <div className={s.recsTable}>
          {tokens?.map((item) => {
            return <TokenCard card={item} className={s.token} key={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};
