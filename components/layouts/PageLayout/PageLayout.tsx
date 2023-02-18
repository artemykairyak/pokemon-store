import { FC, ReactNode } from 'react';

import { PageHead, PageHeadData } from './PageHead';


export type { PageHeadData };

interface PageLayoutProps {
  pageHeadData: PageHeadData;
  children?: ReactNode;
}

export const PageLayout: FC<PageLayoutProps> = (props) => {
  const { pageHeadData, children } = props;

  return (
    <div>
      <PageHead {...pageHeadData} />
      <>{children}</>
    </div>
  );
};
