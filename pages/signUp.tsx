import { PageLayout } from '@components/layouts/PageLayout/PageLayout';
import { SignUpPage } from '@components/pages/SignUpPage/SignUpPage';
import { FC } from 'react';


const SignUp: FC<{}> = (props) => {
  return (
    <PageLayout pageHeadData={{ title: 'SignUp - Pokemon Store' }}>
      <SignUpPage {...props} />
    </PageLayout>
  );
};

export default SignUp;
