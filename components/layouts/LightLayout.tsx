import React, { ReactNode } from 'react';
import NextTopLoader from 'nextjs-toploader';

const LightLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      {/* <MiniFooter /> */}
    </>
  );
};

export default LightLayout;
