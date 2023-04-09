import UploadIcon from '@assets/icons/UploadIcon.svg';
import { UserComponentProps } from '@components/pages/UserPage/types';
import { ButtonInput } from '@components/shared/ButtonInput/ButtonInput';
import { CloseButton } from '@components/shared/CloseButton/CloseButton';
import { Modal } from '@components/shared/Modals/Modal/Modal';
import { useUpdateUser } from '@hooks/useUpdateUser';
import { getRandomAvatar } from '@utils/utils';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { ReactSVG } from 'react-svg';

import s from './Avatar.module.scss';


interface AvatarProps extends UserComponentProps {
  className?: string;
}

export const Avatar: FC<AvatarProps> = ({ user, className, editable }) => {
  const [isUpdatingMode, setIsUpdatingMode] = useState(false);
  const { updateUser } = useUpdateUser(user);

  const onUpdateAvatar = async (values: FieldValues) => {
    const { data } = await updateUser({
      variables: { input: { picture: values.avatar } },
    });

    if (data?.updateUser) {
      setIsUpdatingMode(false);
    }
  };

  return (
    <>
      <div
        className={clsx(s.avatarWrapper, className, {
          [s.disabled]: !editable,
        })}
      >
        <img
          src={user?.picture || getRandomAvatar()}
          alt={`${user?.username}'s avatar`}
          className={s.avatar}
        />
        <button className={s.updateBtn} onClick={() => setIsUpdatingMode(true)}>
          <ReactSVG src={UploadIcon.src} />
        </button>
      </div>
      {isUpdatingMode && (
        <Modal opened={isUpdatingMode}>
          <div className={s.modal}>
            <CloseButton
              className={s.closeBtn}
              onClick={() => setIsUpdatingMode(false)}
            />
            <ButtonInput
              className={s.uploadField}
              buttonText="Upload"
              onSubmit={(data) => onUpdateAvatar(data)}
              name="avatar"
              placeholder="Paste picture link"
            />
          </div>
        </Modal>
      )}
    </>
  );
};
