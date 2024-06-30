import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/common/ui/page-header';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Separator } from '@/components/ui/separator';
import React from 'react';

const PageHome = () => {
  return (
    <DefaultLayout>
      <div className="shadow">
        <div className="container">
          <div className="py-8 text-start lg:px-16">
            <PageHeaderHeading>Blog</PageHeaderHeading>
            <Separator className="mx-2 h-4" orientation="vertical" />{' '}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="py-8 w-8/12 mx-auto lg:px-16">
          <PageHeaderDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            architecto eius dolore adipisci aut vitae consectetur tenetur odit
            accusantium quae eveniet, blanditiis nam eligendi a sint corrupti.
            Nesciunt, voluptates qui earum reprehenderit tempore laborum eos
            similique tempora impedit asperiores officia id blanditiis, saepe
            aliquid accusamus! Quasi quidem sint reiciendis quod sed quos
            molestias porro facere, earum odit accusamus impedit nesciunt neque
            dolorum ut quia provident assumenda vitae, voluptatem nemo. Repellat
            nemo aut adipisci odio voluptatum sequi amet, esse repudiandae
            officia placeat ex ipsam voluptas praesentium architecto, cupiditate
            doloremque odit suscipit vero obcaecati voluptates? Repellat dolorum
            molestiae recusandae, fuga doloremque aspernatur impedit cupiditate
            nobis laborum, rem, tempora architecto provident quia modi vel.
            Excepturi quo placeat doloribus sequi nisi quasi aut? Mollitia minus
            non beatae laborum, eaque voluptas ullam aut laboriosam esse
            officia! Explicabo id nostrum debitis dolorum ratione! Quidem vero
            omnis soluta dolorum voluptatem.
          </PageHeaderDescription>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default PageHome;
