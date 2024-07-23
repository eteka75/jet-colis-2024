import React, { ReactNode } from 'react';
import MiniFooter from '../common/Home/MiniFooter';
import SlimHeader from '../common/SlimHeader';

const SlimLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SlimHeader />
      <div className="md:min-h ">{children}</div>

      <MiniFooter />
    </>
  );
};

export default SlimLayout;
