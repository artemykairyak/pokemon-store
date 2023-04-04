import { FC, ReactNode } from 'react';

import s from './Modal.module.scss';


interface ModalProps {
  children: ReactNode;
  onClose?: VoidFunction;
}

export const Modal: FC<ModalProps> = ({ children, onClose }) => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>{children}</div>
    </div>
  );
};
