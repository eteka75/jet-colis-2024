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
      <div className="shadow">
        <div className="container">
          <div className="py-8 text-start lg:px-16 bg-background">
            <PageHeaderHeading>Conditions d'utilisations</PageHeaderHeading>
            <Separator className="mx-2 h-4" orientation="vertical" />{' '}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="md:w-8/12 mx-auto lg:px-16 py-32 _prose">
          Lorem ipsum dolor sit amet consectetur *adipisicing* elit. Labore
          porro fugit __reprehenderit__ necessitatibus qui neque? Eveniet neque
          culpa, repellat distinctio **aliquid officiis est voluptatem, fugiat
          nesciunt** itaque velit minus dolores!
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Page;
