import { PageLayout } from '@components/layouts/PageLayout/PageLayout';
import { AuthPage } from '@components/pages/AuthPage/AuthPage';
import { FC } from 'react';

const Auth: FC = (props) => {
  return (
    <PageLayout pageHeadData={{ title: 'Auth - Pokemon Store' }}>
      <AuthPage {...props} />
    </PageLayout>
  );
};

export default Auth;
