import { PageLayout } from '@components/layouts/PageLayout/PageLayout';
import { ShopPage } from '@components/pages/ShopPage/ShopPage';
import { FC } from 'react';


const Shop: FC = () => {
  return (
    <PageLayout pageHeadData={{ title: `Shop` }}>
      <ShopPage />
    </PageLayout>
  );
};

export default Shop;
