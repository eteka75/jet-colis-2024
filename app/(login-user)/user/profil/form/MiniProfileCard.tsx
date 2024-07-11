import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const MiniProfileCard = ({
  className,
  children,
  url,
}: {
  className?: string;
  url?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        'rounded-lg shadow-sm  bg-background hover:shadow-md border p-4 md:py-8 items-center text-balance',
        className
      )}
    >
      <Link href={url ?? '#'}>{children}</Link>
    </div>
  );
};

export default MiniProfileCard;
