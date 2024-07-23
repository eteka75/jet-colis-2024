import React, { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16 px-8">{children}</main>
      </div>
    </>
  );
};

export default layout;
