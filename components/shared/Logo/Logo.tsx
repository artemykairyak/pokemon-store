import LogoIcon from '@assets/icons/logo.svg';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import s from './Logo.module.scss';


export const Logo: FC<{ className?: string }> = ({ className }) => {
  return (
    <Link href="/" className={clsx(s.logo, className)}>
      <ReactSVG src={LogoIcon.src} className={s.icon} />
      <span className={s.text}>Pokemon Store</span>
    </Link>
  );
};
