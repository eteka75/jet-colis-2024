import HugeWhy from '@/components/common/Home/HugeWhy';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import React from 'react';
import EsayServices from '@/components/common/Home/EsayServices';
import HowItWorks from '@/components/common/Home/Cards/HowItWorks';
import FaqInfo from '@/components/common/Home/FaqInfo';
import TopBrand from '@/components/common/Home/TopBrand';
import { useTranslations } from 'next-intl';

const About = () => {
  const t = useTranslations('About');
  return (
    <DefaultLayout>
      <h1>{t('title')}</h1>;{/* <HugeWhy /> */}
      {/* <EsayServices /> */}
      {/* <HowItWorks /> */}
      {/* <FaqInfo /> */}
    </DefaultLayout>
  );
};

export default About;
