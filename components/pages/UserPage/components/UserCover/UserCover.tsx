import { useMutation } from '@apollo/client';
import CloseIcon from '@assets/icons/CloseIcon.svg';
import DefaultCover from '@assets/images/userCover.jpg';
import { ButtonInput } from '@components/shared/ButtonInput/ButtonInput';
import { UPDATE_USER } from '@graphql/mutations/users';
import { GET_USER_BY_USERNAME } from '@graphql/queries/users';
import { UpdateUserInput, User } from '@graphqlTypes/graphql';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { ReactSVG } from 'react-svg';

import s from './UserCover.module.scss';


interface UserCoverProps {
  user: User;
  editable: boolean;
}

export const UserCover: FC<UserCoverProps> = ({ user, editable }) => {
  const [isUpdatingMode, setIsUpdatingMode] = useState(false);

  const [updateUser] = useMutation<
    { updateUser: User },
    { input: UpdateUserInput }
  >(UPDATE_USER, {
    refetchQueries: [
      {
        query: GET_USER_BY_USERNAME,
        variables: { username: user.username },
      },
    ],
  });

  const onUpdateCover = async (values: FieldValues) => {
    const { data } = await updateUser({
      variables: { input: { cover: values.updateCover } },
    });

    if (data?.updateUser) {
      setIsUpdatingMode(false);
    }
  };

  const onUpdateAvatar = async (values: FieldValues) => {
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
        backgroundImage: `url(${user?.cover})` || `url(${DefaultCover.src})`,
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
        <ButtonInput
          className={s.input}
          buttonText="Update"
          onSubmit={onUpdateCover}
          name="updateCover"
          placeholder="Paste picture link"
        />
      )}
      {isUpdatingMode && (
        <button className={s.closeBtn} onClick={() => setIsUpdatingMode(false)}>
          {<ReactSVG src={CloseIcon.src} />}
        </button>
      )}{' '}
    </div>
  );
};
