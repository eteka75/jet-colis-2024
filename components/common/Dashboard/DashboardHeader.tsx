import React, { ReactNode } from 'react';

const DashboardHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">{children}</h1>
    </div>
  );
};

export default DashboardHeader;
