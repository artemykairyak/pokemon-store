import clsx from 'clsx';
import { ReactNode, forwardRef } from 'react';
import { ReactSVG } from 'react-svg';

import s from './PrimaryButton.module.scss';


interface PrimaryButtonProps {
  children: ReactNode | string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: VoidFunction;
  icon?: { src: string };
  className?: string;
}

export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, icon, className, onClick, disabled, loading }, ref) => {
    return (
      <button
        className={clsx(s.button, className)}
        onClick={onClick}
        ref={ref}
        disabled={disabled}
      >
        {icon && <ReactSVG className={s.icon} src={icon.src} />}
        {children}
      </button>
    );
  },
);
