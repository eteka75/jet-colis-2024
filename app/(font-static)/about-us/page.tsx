import HugeWhy from '@/components/common/Home/HugeWhy';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import React from 'react';
import EsayServices from '@/components/common/Home/EsayServices';
import HowItWorks from '@/components/common/Home/Cards/HowItWorks';
import FaqInfo from '@/components/common/Home/FaqInfo';
import TopBrand from '@/components/common/Home/TopBrand';

const About = () => {
  return (
    <DefaultLayout>
      <HugeWhy />
      <EsayServices />
      <HowItWorks />
      {/* <FaqInfo /> */}
    </DefaultLayout>
  );
};

export default About;
