import DefaultCover from '@assets/images/userCover.jpg';
import { ButtonInput } from '@components/shared/ButtonInput/ButtonInput';
import { CloseButton } from '@components/shared/CloseButton/CloseButton';
import { User } from '@graphqlTypes/graphql';
import { useUpdateUser } from '@hooks/useUpdateUser';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { FieldValues } from 'react-hook-form';

import s from './UserCover.module.scss';

interface UserCoverProps {
  user: User;
  editable: boolean;
}

export const UserCover: FC<UserCoverProps> = ({ user, editable }) => {
  const [isUpdatingMode, setIsUpdatingMode] = useState(false);
  const { updateUser } = useUpdateUser(user);

  const onUpdateCover = async (values: FieldValues) => {
    const { data } = await updateUser({
      variables: { input: { cover: values.updateCover } },
    });

    if (data?.updateUser) {
      setIsUpdatingMode(false);
    }
  };

  return (
    <div
      className={clsx(s.cover, {
        [s.overlay]: isUpdatingMode,
        [s.disabled]: !editable,
      })}
      style={{
        backgroundImage: user?.cover
          ? `url(${user?.cover})`
          : `url(${DefaultCover.src})`,
      }}
    >
      {!isUpdatingMode && editable && (
        <button
          onClick={() => setIsUpdatingMode(true)}
          className={s.changeCoverBtn}
        >
          Update cover
        </button>
      )}
      {isUpdatingMode && (
        <div className={s.changeCover}>
          <ButtonInput
            className={s.input}
            buttonText="Update"
            onSubmit={onUpdateCover}
            name="updateCover"
            placeholder="Paste picture link"
          />
          <CloseButton
            className={s.closeBtn}
            iconClassName={s.closeBtnIcon}
            onClick={() => setIsUpdatingMode(false)}
          />
        </div>
      )}
    </div>
  );
};
