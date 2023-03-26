import { User } from '@graphqlTypes/graphql';
import { getRandomAvatar } from '@utils/utils';
import clsx from 'clsx';
import { FC } from 'react';

import s from './UserCard.module.scss';


interface UserCardProps {
  user: User;
  index: number;
  className?: string;
}

export const UserCard: FC<UserCardProps> = ({ user, index, className }) => {
  return (
    <div className={clsx(s.user, className)}>
      <span className={s.index}>{index}</span>
      <img
        src={user.picture || getRandomAvatar()}
        alt={`${user.username}'s avatar`}
        className={s.avatar}
      />
      <span className={s.username}>{user.username}</span>
      <div className={s.stats}>
        <span className={s.statsKey}>Total created: </span>
        <span
          className={s.statsValue}
        >{`${user.createdTokensCount} tokens`}</span>
      </div>
    </div>
  );
};
