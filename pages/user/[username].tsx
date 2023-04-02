import { PageLayout } from '@components/layouts/PageLayout/PageLayout';
import { UserPage, UserPageProps } from '@components/pages/UserPage/UserPage';
import { GetServerSidePropsContext } from 'next';
import { FC } from 'react';


const User: FC<UserPageProps> = (props) => {
  return (
    <PageLayout pageHeadData={{ title: `${props.username}` }}>
      <UserPage {...props} />
    </PageLayout>
  );
};

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  return {
    props: {
      username: query.username,
    },
  };
}

export default User;
