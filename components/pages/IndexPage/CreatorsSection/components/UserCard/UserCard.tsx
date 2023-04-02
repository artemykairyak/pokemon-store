import { Avatar } from '@components/shared/Avatar/Avatar';
import { User } from '@graphqlTypes/graphql';
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
      <Avatar user={user} className={s.avatar} />
      <span className={s.index}>{index + 1}</span>
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
