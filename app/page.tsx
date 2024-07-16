import React from 'react';
import TrajetCard from '@/components/common/Home/TrajetCard';
import HomeLayout from '@/components/layouts/HomeLayout';
import { useTranslations } from 'next-intl';
import Page from './home/page';

const Home = () => {
  // const t = useTranslations('Index');

  return (
    <HomeLayout>
      <TrajetCard />
    </HomeLayout>
  );
};

export default Home;
