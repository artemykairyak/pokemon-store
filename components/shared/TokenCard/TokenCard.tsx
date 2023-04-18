import { UserInfo } from '@components/pages/TokenPage/components/UserInfo/UserInfo';
import { Token } from '@graphqlTypes/graphql';
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
  card: { picture, author, price, name, id, type, owner },
  darken = false,
  className,
}) => {
  const userClassNames = {
    wrapper: s.ownerWrapper,
    label: s.ownerLabel,
    username: s.ownerUsername,
    avatar: s.ownerAvatar,
  };

  return (
    <Link
      href={`/token/${id}`}
      className={clsx(s.card, { [s.darken]: darken }, className)}
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div className={s.info}>
        <div className={s.mainInfo}>
          <div className={s.infoTable}>
            <span className={s.title}>{name}</span>
            <div className={s.author}>
              <UserInfo user={owner} classNames={userClassNames} />
            </div>
          </div>
          <img
            className={s.type}
            src={type.picture}
            alt={`${type.name} type`}
          />
        </div>
        <div className={s.footer}>
          <div className={s.price}>
            <span className={s.priceLabel}>Price</span>
            <span className={s.priceValue}>${price}</span>
          </div>
          {!!owner?.id && (
            <div className={s.owner}>
              <UserInfo
                user={owner}
                label="Owner"
                classNames={userClassNames}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
