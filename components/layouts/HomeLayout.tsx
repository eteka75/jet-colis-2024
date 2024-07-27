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
      <header className="fixed top-0 left-0 right-0 z-50 border-b_border-accent ">
        <Header type="large" />
        <div className=" -mt-0.5">
          <SubNav type="large" />
        </div>
      </header>
      <div className="md:min-h __mt-0 mt-[90px] md:mt-[110px] ">{children}</div>
      <MiniFooter />
    </>
  );
};
export default HomeLayout;
