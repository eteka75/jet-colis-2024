import React, { ReactNode } from 'react';
import Header from '@/components/common/Header';
import Footer from '../common/Footer';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="md:min-h">{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
