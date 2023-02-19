import {FC, ReactNode} from 'react';

import {PageHead, PageHeadData} from './PageHead';
import {Header} from "@components/shared/Header/Header";
import s from './PageLayout.module.scss'

export type {PageHeadData};

interface PageLayoutProps {
  pageHeadData: PageHeadData;
  children?: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const {pageHeadData, children} = props;

  return (
    <div className={s.body}>
      <PageHead {...pageHeadData} />
      <Header/>
      <div className={s.content}>
        {children}
      </div>
    </div>
  );
};
