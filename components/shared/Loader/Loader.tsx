import LoaderIcon from '@assets/icons/Loader.svg';
import clsx from 'clsx';
import { FC } from 'react';
import { ReactSVG } from 'react-svg';

import s from './Loader.module.scss';


interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={s.loaderWrapper}>
      <ReactSVG src={LoaderIcon.src} className={clsx(s.loader, className)} />
    </div>
  );
};
