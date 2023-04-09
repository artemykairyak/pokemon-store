import { UserComponentProps } from '@components/pages/UserPage/types';
import { useUpdateUser } from '@hooks/useUpdateUser';
import { ChangeEvent, FC, useState } from 'react';

import s from './UserBio.module.scss';


export const UserBio: FC<UserComponentProps> = ({ user, editable }) => {
  const [bio, setBio] = useState<string>(user.bio || 'Here is empty...');
  const [error, setError] = useState('');
  const { updateUser } = useUpdateUser(user);

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
      <span className={s.label}>Bio</span>
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
