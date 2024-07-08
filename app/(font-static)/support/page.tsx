import { PageHeaderHeading } from '@/components/common/ui/page-header';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import React from 'react';

const Page = () => {
  return (
    <DefaultLayout>
      <div className="container">
        <PageHeaderHeading>Support</PageHeaderHeading>
      </div>
    </DefaultLayout>
  );
};

export default Page;
