'use client';
import React from 'react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavBreadcrumbProps {
  items: { text?: string; href?: string }[];
}

const NavBreadcrumb: React.FC<NavBreadcrumbProps> = ({ items }) => {
  return (
    <div className="border-t_border-t-slate-100 mx-2">
      <div className="container py-2 ">
        <Breadcrumb>
          <BreadcrumbList>
            {items?.length > 0 &&
              items.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    {item.href ? (
                      <BreadcrumbLink href={item.href}>
                        {item.text}
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage className="opacity-70">
                        {item.text}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < items.length - 1 && <BreadcrumbSeparator />}
                </React.Fragment>
              ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default NavBreadcrumb;
