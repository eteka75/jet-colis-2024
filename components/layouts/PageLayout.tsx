import React, { ReactNode } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import SubNav from '../common/Home/SubNav';

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="md:min-h">{children}</div>
      <Footer />
    </>
  );
};
export default PageLayout;
