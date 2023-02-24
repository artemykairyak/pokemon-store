import LogoIcon from '@assets/icons/logo.svg';
import clsx from 'clsx';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import s from './Logo.module.scss';


export const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx(s.logo, className)}>
      <ReactSVG src={LogoIcon.src} className={s.icon} />
      <span className={s.text}>Pokemon Store</span>
    </div>
  );
};
