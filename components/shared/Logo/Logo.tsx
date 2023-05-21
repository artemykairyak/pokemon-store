import LogoIcon from '@assets/icons/logo.svg';
import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import s from './Logo.module.scss';

interface LogoProps {
  compact?: boolean;
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className, compact = false }) => {
  return (
    <Link
      href="/"
      className={clsx(s.logo, className, { [s.compact]: compact })}
    >
      <ReactSVG src={LogoIcon.src} className={s.icon} />
      <span className={s.text}>Pokemon Store</span>
    </Link>
  );
};
