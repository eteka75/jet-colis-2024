'use client';
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface NavBreadcrumbProps {
  items: { text?: string; href?: string }[];
}

const NavBreadcrumb: React.FC<NavBreadcrumbProps> = ({ items }) => {
  return (
    <Breadcrumb className="my-2">
      <BreadcrumbList>
        {items?.length > 0 &&
          items.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.href ? (
                  <BreadcrumbLink className="text-xs" href={item.href}>
                    {item.text}
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="opacity-70 text-xs">
                    {item.text}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {index < items.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default NavBreadcrumb;
