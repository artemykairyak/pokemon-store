import { User } from '@graphqlTypes/graphql';
import { getRandomAvatar } from '@utils/utils';
import clsx from 'clsx';
import { FC } from 'react';

import s from './Avatar.module.scss';


interface AvatarProps {
  user: User;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ user, className }) => {
  return (
    <div className={clsx(s.avatarWrapper, className)}>
      <img
        src={user.picture || getRandomAvatar()}
        alt={`${user.username}'s avatar`}
        className={s.avatar}
      />
    </div>
  );
};
