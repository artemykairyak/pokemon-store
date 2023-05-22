import { FC, ReactNode, useEffect } from 'react';

import s from './Modal.module.scss';

interface ModalProps {
  children: ReactNode;
  opened: boolean;
  onClose?: VoidFunction;
}

export const Modal: FC<ModalProps> = ({ children, opened, onClose }) => {
  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [opened]);

  return (
    <div className={s.overlay}>
      <div className={s.modal}>{children}</div>
    </div>
  );
};
