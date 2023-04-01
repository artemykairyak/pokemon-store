import { User } from '@graphqlTypes/graphql';
import { getRandomAvatar } from '@utils/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import s from './UserCard.module.scss';


interface UserCardProps {
  user: User;
  index: number;
  className?: string;
}

export const UserCard: FC<UserCardProps> = ({ user, index, className }) => {
  return (
    <Link href={`/user/${user.username}`} className={clsx(s.user, className)}>
      <div className={s.avatarWrapper}>
        <span className={s.index}>{index + 1}</span>
        <img
          src={user.picture || getRandomAvatar()}
          alt={`${user.username}'s avatar`}
          className={s.avatar}
        />
      </div>
      <span className={s.username}>{user.username}</span>
      <div className={s.stats}>
        <span className={s.statsKey}>Total created: </span>
        <span
          className={s.statsValue}
        >{`${user.createdTokensCount} tokens`}</span>
      </div>
    </Link>
  );
};
