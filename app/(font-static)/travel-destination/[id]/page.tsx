import { PageHeader } from '@/components/common/ui/page-header';
import HomeLayout from '@/components/layouts/HomeLayout';
import React from 'react';

const Page = () => {
  return (
    <HomeLayout>
      <div className="container-fluid py-4">
        <h1>Plus de 100 livraisons</h1>
      </div>
    </HomeLayout>
  );
};

export default Page;
