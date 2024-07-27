import React from 'react';
import AdminDashbordMobile from './AdminDashbordMobile';
import { ChevronLeft, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import LoginDropdownMenu from '@/components/common/ui/LoginDropdownMenu';
import MenuActions from './MenuActions';
import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import { auth } from '@/auth';
import { GuestDropdownMenu } from '@/components/common/ui/GuestDropdownMenu';
import { useSession } from 'next-auth/react';

const DahshHeader = ({
  page = 'dashboard',
  isMinimized,
  handleToggle,
}: {
  page?: string;
  isMinimized: boolean;
  handleToggle: () => void;
}) => {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <>
      <header className="flex border-b_ h-14 items-center bg-background border-accent__ px-4 lg:h-[61px] lg:px-6">
        <div className="absolute z-50">
          <Link href={'#'} onClick={() => handleToggle()}>
            <ChevronLeft
              className={cn(
                'absolute -left-14 h-5 duration-500 w-5 -top-3 cursor-pointer rounded-md border bg-background text-3xl text-foreground',
                isMinimized && 'rotate-180'
              )}
            />
          </Link>
        </div>
        <div>
          <AdminDashbordMobile page={page} />
        </div>{' '}
        <div className="w-full flex-1"></div>
        <div className="gap-2 flex ms-1">
          <form className="w-full">
            <div className="relative">
              <Search className="absolute left-2 top-2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Rechercher..."
                className="w-full border-accent__ border min-w-80 appearance-none h-8 bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
              />
            </div>
          </form>
          <MenuActions />
          {user ? <LoginDropdownMenu user={user} /> : <GuestDropdownMenu />}
        </div>
      </header>
    </>
  );
};

export default DahshHeader;
