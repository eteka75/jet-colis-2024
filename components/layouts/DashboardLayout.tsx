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
        <div className="container-fluid__">
          <div
            className={cn(
              'grid  min-h-screen w-full border-l',
              !isMinimized
                ? 'md:grid-cols-[285px_1fr] lg:grid-cols-[288px_1fr]'
                : 'md:grid-cols-[78px_1fr] '
            )}
          >
            <div
              className={cn(
                `relative hidden  flex-none z-10 md:block`,
                status && 'duration-500',
                !isMinimized ? 'w-72' : 'w-[78px]',
                className
              )}
            >
              <DashNav
                page={page}
                // isMinimized={isMinimized}
                // isMobileNav={status}
              />

              <Link href={'#'} onClick={handleToggle}>
                <ChevronLeft
                  className={cn(
                    'absolute -right-3 h-5 duration-500 w-5 top-16 cursor-pointer rounded-md border bg-background text-3xl text-foreground',
                    isMinimized && 'rotate-180'
                  )}
                />
              </Link>
            </div>
            <div className="flex flex-col border-r border-b">
              <header
                className="flex lg:h-[64px] lg:px-6  items-center gap-4 border-b border-accent px-4 
                supports-backdrop-blur:bg-background/60  left-0 right-0 top-0 z-20  bg-background/95 backdrop-blur
                "
              >
                <DahshHeader isMinimized={isMinimized} />
              </header>

              <ScrollArea className="h-full border-l border-accent">
                <main className="flex-1 space-y-4 p-4 md:p-6">{children}</main>
              </ScrollArea>
            </div>
          </div>
        </div>
      </LightLayout>
    </>
  );
};
export default DashboardLayout;
