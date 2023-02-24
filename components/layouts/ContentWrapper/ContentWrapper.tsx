import { FC, ReactNode } from 'react';

import s from './ContentWrapper.module.scss';


interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export const ContentWrapper: FC<ContentWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={className}>
      <div className={s.wrapper}>{children}</div>
    </div>
  );
};
