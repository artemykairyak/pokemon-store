import UploadIcon from '@assets/icons/UploadIcon.svg';
import { User } from '@graphqlTypes/graphql';
import { getRandomAvatar } from '@utils/utils';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';

import s from './Avatar.module.scss';


interface AvatarProps {
  user: User;
  editable?: boolean;
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ user, className, editable }) => {
  const [isUpdatingMode, setIsUpdatingMode] = useState(false);

  return (
    <div
      className={clsx(s.avatarWrapper, className, { [s.disabled]: !editable })}
    >
      <img
        src={user?.picture || getRandomAvatar()}
        alt={`${user?.username}'s avatar`}
        className={s.avatar}
      />
      <button className={s.updateBtn}>
        <ReactSVG src={UploadIcon.src} />
      </button>
    </div>
  );
};
