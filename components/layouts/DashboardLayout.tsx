'use client';
import Link from 'next/link';
import { ChevronLeft, CircleUser, Menu, Plus, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Metadata } from 'next';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import LightLayout from '@/components/layouts/LightLayout';
import Image from 'next/image';
import { adminMenu } from '@/src/lib/admin-user-menu';
import UserDropdownMenu from '../common/ui/UserDropdownMenu';
import { auth } from '@/auth';
import { ReactNode, useState } from 'react';
import { User } from '@/src/lib/definitions';
import clsx from 'clsx';
import { cn } from '@/src/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import LoginDropdownMenu from '../common/ui/LoginDropdownMenu';
import AdminDashbordMobile from './ui/AdminDashbordMobile';
import DashNav from './ui/DashNav';
import DahshHeader from './ui/DahshHeader';
import { ScrollArea } from '../ui/scroll-area';
import MiniFooter from '../common/Home/MiniFooter';

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
                // !isMinimized ? 'w-72' : 'w-[78px]',

                className
              )}
            >
              <DashNav
                page={page}
                // isMinimized={isMinimized}
                // isMobileNav={status}
              />
            </div>
            <div className="flexflex-col border-r border-l ">
              <DahshHeader
                isMinimized={isMinimized}
                handleToggle={handleToggle}
                page={page}
              />
              <ScrollArea className="h-full ">
                <main className=" border-t mt-[1px] p-4 md:p-6">
                  <div className=" max-w-screen-xl mx-auto">{children} </div>
                  {/* <div className="md:flex md:justify-between items-center md:pe-4">
                   
                  </div> */}
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
