import { Token } from '@graphqlTypes/graphql';
import { getRandomAvatar } from '@utils/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import s from './TokenCard.module.scss';


interface PokemonCardProps {
  card: Token;
  darken?: boolean;
  className?: string;
}

export const TokenCard: FC<PokemonCardProps> = ({
  card: { picture, author, price, name, id },
  darken = false,
  className,
}) => {
  return (
    <Link
      href={`/token/${id}`}
      className={clsx(s.card, { [s.darken]: darken }, className)}
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className={s.info}>
        <div className={s.mainInfo}>
          <span className={s.title}>{name}</span>
          <div className={s.author}>
            <img
              className={s.authorPic}
              src={author.picture || getRandomAvatar()}
              alt={`${author.username} avatar`}
            />
            <span className={s.authorName}>{author.username}</span>
          </div>
        </div>
        {price && (
          <div className={s.price}>
            <span className={s.priceLabel}>Price</span>
            <span className={s.priceValue}>${price}</span>
          </div>
        )}
      </div>
    </Link>
  );
};
