import React, { lazy } from 'react';
import HomeLayout from '@/components/layouts/HomeLayout';
import { useTranslations } from 'next-intl';
import Page from './home/page';
const TrajetCard = lazy(() => import('@/components/common/Home/TrajetCard'));

const Home = () => {
  // const t = useTranslations('Index');

  return (
    <HomeLayout>
      <TrajetCard />
    </HomeLayout>
  );
};

export default Home;
