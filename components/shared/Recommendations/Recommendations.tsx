import { HeadingGroup } from '@components/shared/HeadingGroup/HeadingGroup';
import { TokenCard } from '@components/shared/TokenCard/TokenCard';
import { Token } from '@graphqlTypes/graphql';
import { FC, ReactNode } from 'react';

import s from './Recommendations.module.scss';


interface RecommendationsProps {
  title: string;
  tokens?: Token[];
  subtitle?: string;
  button?: ReactNode;
}

export const Recommendations: FC<RecommendationsProps> = ({
  tokens,
  title,
  subtitle,
  button,
}) => {
  return (
    <div>
      <HeadingGroup title={title} subtitle={subtitle}>
        {button && button}
      </HeadingGroup>
      <div className={s.recsTable}>
        {tokens?.map((item) => {
          return <TokenCard card={item} className={s.token} />;
        })}
      </div>
    </div>
  );
};
