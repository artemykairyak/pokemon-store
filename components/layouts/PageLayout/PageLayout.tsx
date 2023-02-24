import { Footer } from '@components/shared/Footer/Footer';
import { Header } from '@components/shared/Header/Header';
import { FC, ReactNode } from 'react';

import { PageHead, PageHeadData } from './PageHead';
import s from './PageLayout.module.scss';


export type { PageHeadData };

interface PageLayoutProps {
  pageHeadData: PageHeadData;
  children?: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { pageHeadData, children } = props;

  return (
    <div className={s.body}>
      <PageHead {...pageHeadData} />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
