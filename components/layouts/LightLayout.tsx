import React, { ReactNode } from 'react';
import Header from '@/components/common/Header';
import Footer from '../common/Footer';
import MiniFooter from '../common/Home/MiniFooter';

const LightLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <MiniFooter />
    </>
  );
};

export default LightLayout;
