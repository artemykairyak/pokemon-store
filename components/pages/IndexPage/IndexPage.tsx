import { useQuery } from '@apollo/client';
import { MainSection } from '@components/pages/IndexPage/MainSection/MainSection';
import { GET_ALL_CARDS } from 'graphql/queries/cards';


export const IndexPage = () => {
  const { data, loading } = useQuery(GET_ALL_CARDS);

  return (
    <>
      <MainSection />
    </>
  );
};
