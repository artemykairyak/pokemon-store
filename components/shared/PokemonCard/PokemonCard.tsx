import { Token } from '@graphqlTypes/graphql';
import clsx from 'clsx';
import { FC } from 'react';

import s from './PokemonCard.module.scss';


interface PokemonCardProps {
  card: Token;
  className?: string;
}

export const PokemonCard: FC<PokemonCardProps> = ({
  card: { picture, author, price, name },
  className,
}) => {
  return (
    <div
      className={clsx(s.card, className)}
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className={s.info}>
        <div className={s.mainInfo}>
          <span className={s.title}>{name}</span>
          <div className={s.author}>
            <img
              className={s.authorPic}
              src={author.picture || ''}
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
    </div>
  );
};
