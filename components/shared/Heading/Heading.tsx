import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import s from './Heading.module.scss';


interface HeadingProps {
  children: ReactNode;
  level: 1 | 2 | 3 | 4;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({ children, level, className }) => {
  switch (level) {
    case 2:
      return <h2 className={clsx(s.h2, className)}>{children}</h2>;
    case 3:
      return <h3 className={clsx(s.h3, className)}>{children}</h3>;
    case 4:
      return <h4 className={clsx(s.h4, className)}>{children}</h4>;
    default:
      return <h1 className={clsx(s.h1, className)}>{children}</h1>;
  }
};
