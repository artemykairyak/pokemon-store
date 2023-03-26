import { TokenType } from '@graphqlTypes/graphql';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import s from './TokenTypeCard.module.scss';


interface TokenTypeCardProps {
  tokenType: TokenType;
  className?: string;
}

export const TokenTypeCard: FC<TokenTypeCardProps> = ({
  tokenType,
  className,
}) => {
  return (
    //todo: link
    <Link href="/store" className={clsx(s.tokenType, className)}>
      <div className={s.info}>
        <img
          className={s.picture}
          src={tokenType.picture}
          alt={`${tokenType.name} type`}
        />
      </div>
      <div className={s.footer}>
        <span className={s.name}>{tokenType.name}</span>
      </div>
    </Link>
  );
};
