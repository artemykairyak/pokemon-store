import { CreatorsSection } from '@components/pages/IndexPage/CreatorsSection/CreatorsSection';
import { MainSection } from '@components/pages/IndexPage/MainSection/MainSection';
import { TokenTypesSection } from '@components/pages/IndexPage/TokenTypesSection/TokenTypesSection';


export const IndexPage = () => {
  return (
    <>
      <MainSection />
      <TokenTypesSection />
      <CreatorsSection />
    </>
  );
};
