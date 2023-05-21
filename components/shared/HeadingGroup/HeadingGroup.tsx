import { Heading } from '@components/shared/Heading/Heading';
import clsx from 'clsx';
import { FC, ReactNode } from 'react';

import s from './HeadingGroup.module.scss';

interface HeadingGroupProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export const HeadingGroup: FC<HeadingGroupProps> = ({
  title,
  subtitle,
  children,
  className,
}) => {
  return (
    <div className={clsx(s.headingWrapper, className)}>
      <div>
        <Heading level={2}>{title}</Heading>
        {subtitle && <span className={s.subtitle}>{subtitle}</span>}
      </div>
      <div className={s.button}>{children}</div>
    </div>
  );
};
