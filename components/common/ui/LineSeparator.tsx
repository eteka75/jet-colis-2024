import React, { ReactNode } from 'react';

interface LineSeparatorProps {
  children: ReactNode;
  props?: React.HTMLAttributes<HTMLSpanElement>;
}

const LineSeparator: React.FC<LineSeparatorProps> = ({
  children,
  ...props
}) => {
  return (
    <div className="flex gap-2 items-center justify-center w-full">
      <div className="flex-grow  my-4 border-t border-gray-300"></div>
<<<<<<< HEAD
      <div className="mx-2" {...props}>
=======
      <div className="mx-4 bg-slate-500" {...props}>
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
        {children}
      </div>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};

export default LineSeparator;
