import React, { ReactNode } from 'react';
import Header from '@/components/common/Header';
import Footer from '../common/Footer';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="md:min-h">{children}</div>
    </>
  );
};

export default DefaultLayout;
