import { UserComponentProps } from '@components/pages/UserPage/types';
import { Label } from '@components/shared/Label/Label';
import { useUpdateUser } from '@hooks/useUpdateUser';
import { ChangeEvent, FC, useEffect, useState } from 'react';

import s from './UserBio.module.scss';

export const UserBio: FC<UserComponentProps> = ({ user, editable }) => {
  const [bio, setBio] = useState('');
  const [error, setError] = useState('');
  const { updateUser } = useUpdateUser(user);

  useEffect(() => {
    setBio(user.bio || 'Here is empty...');
  }, [user]);

  const onChangeBio = (e: ChangeEvent<HTMLInputElement>) => {
    setBio(e.target.value);
  };

  const onSaveBio = async () => {
    const { data } = await updateUser({
      variables: { input: { bio } },
    });

    if (!data?.updateUser) {
      setError('Error is occured. try again');
    } else {
      setBio(data.updateUser.bio || 'Here is empty...');
    }
  };

  return (
    <div className={s.bioWrapper}>
      <Label>Bio</Label>
      <input
        className={s.bio}
        value={bio}
        onChange={onChangeBio}
        onBlur={onSaveBio}
        disabled={!editable}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};
