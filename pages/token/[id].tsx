import { PageLayout } from '@components/layouts/PageLayout/PageLayout';
import { TokenPage } from '@components/pages/TokenPage/TokenPage';
import { GET_TOKEN } from '@graphql/queries/tokens';
import { QueryGetTokenArgs, Token as TokenType } from '@graphqlTypes/graphql';
import { useAppQuery } from '@hooks/useAppQuery';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { FC } from 'react';

const Token: FC<{ tokenId: number }> = ({ tokenId }) => {
  const router = useRouter();

  const [token, errors, loading] = useAppQuery<QueryGetTokenArgs, TokenType>(
    GET_TOKEN,
    {
      id: +tokenId,
    },
  );

  if (errors) {
    router.push('/404');
  }

  return (
    <PageLayout pageHeadData={{ title: `${token?.name}` }}>
      {token && <TokenPage token={token} loading={loading} />}
    </PageLayout>
  );
};

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  if (!query.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tokenId: +query.id,
    },
  };
}

export default Token;
