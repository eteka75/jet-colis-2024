import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/common/ui/page-header';
import TopPageLanding from '@/components/common/ui/TopPageLanding';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Page = () => {
  return (
    <DefaultLayout>
      <div className="py-20 bg-slate-600 text-white">
        <div className="container">
          <div className="md:grid md:grid-cols-3  lg:px-16 ">
            <div className="p-4 col-span-2">
              <PageHeaderHeading className="items-start text-start">
                Conditions d'utilisations
              </PageHeaderHeading>
              <TopPageLanding className="text-white font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur voluptatem excepturi quibusdam animi. Nemo autem
                ipsa iste magni laudantium cupiditate obcaecati alias quibusdam
                architecto excepturi dicta,{' '}
              </TopPageLanding>
            </div>
            <div className="p-4"></div>
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
