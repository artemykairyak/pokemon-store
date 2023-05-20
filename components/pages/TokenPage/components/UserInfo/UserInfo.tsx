import { Avatar } from '@components/shared/Avatar/Avatar';
import { Label } from '@components/shared/Label/Label';
import { User } from '@graphqlTypes/graphql';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import s from './UserInfo.module.scss';

interface UserInfoProps {
  user: User;
  label?: string;
  classNames?: {
    wrapper?: string;
    label?: string;
    username?: string;
    avatar?: string;
  };
}

export const UserInfo: FC<UserInfoProps> = ({ user, label, classNames }) => {
  return (
    <div className={clsx(s.authorWrapper, classNames?.wrapper)}>
      {label && <Label className={classNames?.label}>{label}</Label>}
      <Link href={`/user/${user?.username}`} className={s.author}>
        <Avatar
          user={user}
          className={clsx(s.authorAvatar, classNames?.avatar)}
        />
        <span className={clsx(s.authorName, classNames?.username)}>
          {user?.username}
        </span>
      </Link>
    </div>
  );
};
