import { ButtonInput } from '@components/shared/ButtonInput/ButtonInput';
import { Modal } from '@components/shared/Modals/Modal/Modal';

import s from './UpdateCoverModal.module.scss';


export const UpdateCoverModal = () => {
  const onUpdate = () => {
    console.log('update');
  };

  return (
    <Modal>
      <div className={s.form}>
        <ButtonInput
          buttonText="Update"
          onSubmit={onUpdate}
          name="updateCover"
          placeholder="Paste the link on picture"
        />
      </div>
    </Modal>
  );
};
