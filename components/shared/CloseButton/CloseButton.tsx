import CloseIcon from '@assets/icons/CloseIcon.svg';
import clsx from 'clsx';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import s from './CloseButton.module.scss';


interface CloseButtonProps {
  onClick: VoidFunction;
  className?: string;
  iconClassName?: string;
}

export const CloseButton: FC<CloseButtonProps> = ({
  onClick,
  className,
  iconClassName,
}) => {
  return (
    <button className={clsx(s.closeBtn, className)} onClick={onClick}>
      {<ReactSVG src={CloseIcon.src} className={clsx(s.icon, iconClassName)} />}
    </button>
  );
};
