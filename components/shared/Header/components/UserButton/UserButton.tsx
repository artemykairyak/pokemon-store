import { Avatar } from '@components/shared/Avatar/Avatar';
import { User } from '@graphqlTypes/graphql';
import Link from 'next/link';
import { FC } from 'react';

import s from './UserButton.module.scss';

interface UserButtonProps {
  user: User;
}

export const UserButton: FC<UserButtonProps> = ({ user }) => {
  console.log(user);
  return (
    <Link href={`/user/${user.username}`}>
      <div className={s.userBtn}>
        <Avatar user={user} className={s.avatar} editable={false} />
        <span className={s.username}>{user.username}</span>
      </div>
    </Link>
  );
};
