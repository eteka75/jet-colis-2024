import clsx from 'clsx';
import React, { ReactNode } from 'react';

const TopPageLanding = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <h1
        className={clsx(
          'mb-4 mt-4 max-w-4xl text-base leading-7 text-slate-700',
          className
        )}
      >
        {children}
      </h1>
    </div>
  );
};

export default TopPageLanding;
