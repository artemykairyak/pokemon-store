import { CreatorsSection } from '@components/pages/IndexPage/CreatorsSection/CreatorsSection';
import { DigestSection } from '@components/pages/IndexPage/DigestSection/DigestSection';
import { MainSection } from '@components/pages/IndexPage/MainSection/MainSection';
import { MoreTokensSection } from '@components/pages/IndexPage/MoreTokensSection/MoreTokensSection';
import { TokenTypesSection } from '@components/pages/IndexPage/TokenTypesSection/TokenTypesSection';


export const IndexPage = () => {
  return (
    <>
      <MainSection />
      <TokenTypesSection />
      <CreatorsSection />
      <MoreTokensSection />
      <DigestSection />
    </>
  );
};
