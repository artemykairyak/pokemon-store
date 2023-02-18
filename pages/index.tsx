import { PageLayout } from '@components/layouts/PageLayout/PageLayout';
import { IndexPage } from '@components/pages/IndexPage/IndexPage';
import { FC } from 'react';


const Index: FC<{}> = (props) => {
  return (
    <PageLayout pageHeadData={{ title: 'Pokemon Store' }}>
      <IndexPage {...props} />
    </PageLayout>
  );
};

export default Index;
