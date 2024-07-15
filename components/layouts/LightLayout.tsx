import React, { ReactNode } from 'react';
import Header from '@/components/common/Header';
import Footer from '../common/Footer';
import MiniFooter from '../common/Home/MiniFooter';
import HeaderLight from '../common/HeaderLight';

const LightLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      {/* <MiniFooter /> */}
    </>
  );
};

export default LightLayout;
