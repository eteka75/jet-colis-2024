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
        <div className="h-80  bg-accent rounded-md mb-8"></div>
        <div className=" text-2xl font-boldw-8/12 mx-auto lg:px-16">Trajet</div>
        <div className="p-40"></div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
