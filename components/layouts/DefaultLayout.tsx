import React, { ReactNode } from 'react';
// import Header from '../common/Header';
import SubNav from '../common/Home/SubNav';

import { lazy } from 'react';
import MiniFooter from '../common/Home/MiniFooter';

// Charger le composant client de manière asynchrone
const Header = lazy(() => import('../common/Header'));
const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="md:fixed   top-0 left-0 right-0 z-50 border- _border-accent ">
        {/* <Suspense fallback={<div className="text-lg">Loading...</div>}> */}
        <Header type="moyen" />
        <div className="md:-mt-1 -mt-0.5">
          <SubNav />
        </div>
        {/* </Suspense> */}
      </header>
      <div className="h-6 md:h-20 md:mt-28">{children}</div>
      <MiniFooter />
    </>
  );
};
export default HomeLayout;
