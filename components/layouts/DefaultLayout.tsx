import React, { ReactNode } from 'react';
import Header from '@/components/common/Header';
import Footer from '../common/Footer';

const DefaultLayout = ({
  type,
  children,
}: {
  type?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <Header type={type} />
      <div className="md:min-h bg-accente">{children}</div>
      <Footer />
    </>
  );
};
export default DefaultLayout;
