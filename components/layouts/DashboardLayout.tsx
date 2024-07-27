'use client';

import LightLayout from '@/components/layouts/LightLayout';
import { lazy, ReactNode, useState } from 'react';
import { cn } from '@/src/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import DashNav from './ui/DashNav';
import { ScrollArea } from '../ui/scroll-area';
import MiniFooter from '../common/Home/MiniFooter';
const DahshHeader = lazy(() => import('./ui/DahshHeader'));

type SidebarProps = {
  className?: string;
};

const DashboardLayout = async ({
  page,
  children,
  className,
}: {
  page?: string;
  children: ReactNode;
  className?: SidebarProps;
}) => {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    // setTimeout(() => setStatus(false), 500);
  };
  return (
    <>
      <LightLayout>
        <div className="container-fluid__ bg-accente">
          <div
            className={cn(
              'grid  min-h-screen w-full border-l',
              !isMinimized
                ? 'md:grid-cols-[235px_1fr] lg:grid-cols-[288px_1fr]'
                : 'grid-cols-[70px_1fr] '
            )}
          >
            <div
              className={cn(
                `relative hidden  flex-none z-10 md:block`,
                status && 'duration-500',

                className
              )}
            >
              <DashNav page={page} />
            </div>
            <div className="flexflex-col md:border-r md:border-l ">
              <DahshHeader
                isMinimized={isMinimized}
                handleToggle={handleToggle}
                page={page}
              />
              <ScrollArea className="h-full ">
                <main className=" border-t mt-[1px] p-4 md:p-6">
                  <div className=" max-w-screen-xl mx-auto">{children} </div>
                </main>
              </ScrollArea>
            </div>
          </div>
        </div>
      </LightLayout>
      <MiniFooter />
    </>
  );
};
export default DashboardLayout;
