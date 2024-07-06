import React, { ReactNode } from 'react';
// import Header from '../common/Header';
import Footer from '../common/Footer';
import SubNav from '../common/Home/SubNav';

import { Suspense, lazy } from 'react';
import MiniFooter from '../common/Home/MiniFooter';

// Charger le composant client de manière asynchrone
const Header = lazy(() => import('../common/Header'));
const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="md:fixed top-0 left-0 right-0 z-50 border-b border-accent">
        {/* <Suspense fallback={<div className="text-lg">Loading...</div>}> */}
        <Header />
        <SubNav />
        {/* </Suspense> */}
      </header>
      <div className="md:min-h mt-0 md:mt-28 ">{children}</div>
      <MiniFooter />
    </>
  );
};
export default HomeLayout;
