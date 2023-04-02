import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import s from './ContentWrapper.module.scss';


interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  className,
  wrapperClassName,
}) => {
  return (
    <div className={className}>
      <div className={clsx(s.wrapper, wrapperClassName)}>{children}</div>
    </div>
  );
};
