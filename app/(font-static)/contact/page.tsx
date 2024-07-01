import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/common/ui/page-header';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const Contact = () => {
  return (
    <DefaultLayout>
      <div className="shadow">
        <div className="container">
          <div className="py-8 text-start lg:px-16">
            <PageHeaderHeading>Contact</PageHeaderHeading>
            <Separator className="mx-2 h-4" orientation="vertical" />{' '}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-8 w-8/12 mx-auto lg:px-16"></div>
      </div>
    </DefaultLayout>
  );
};
export default Contact;
