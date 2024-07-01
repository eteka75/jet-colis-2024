import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/common/ui/page-header';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Page = () => {
  return (
    <DefaultLayout>
      <div className="container-mini container-min">
        <div className="h-80  bg-accent rounded-md my-8"></div>
        <div className="py-8 w-8/12 mx-auto lg:px-16">Trajet</div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
