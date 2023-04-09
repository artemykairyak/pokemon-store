import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import s from './Label.module.scss';


interface LabelProps {
  children: ReactNode;
  className?: string;
}

export const Label: FC<LabelProps> = ({ children, className }) => {
  return <span className={clsx(s.label, className)}>{children}</span>;
};
