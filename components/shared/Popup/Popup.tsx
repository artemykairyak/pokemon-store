import clsx from 'clsx';
import { FC } from 'react';

import s from './Popup.module.scss';


interface PopupProps {
  type: 'success' | 'error';
  text: string;
  title?: string;
}

export const Popup: FC<PopupProps> = ({ type, text, title }) => {
  return (
    <div
      className={clsx(s.popup, {
        [s.success]: type === 'success',
        [s.error]: type === 'error',
      })}
    >
      {title && <span className={s.title}>{title}</span>}
      <p>{text}</p>
    </div>
  );
};
