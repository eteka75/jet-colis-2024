import React, { ReactNode } from 'react';

const TopPageText = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight ">
        {children}
      </h1>
    </div>
  );
};

export default TopPageText;
