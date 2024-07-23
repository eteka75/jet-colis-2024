import React from 'react';
import AdminDashbordMobile from './AdminDashbordMobile';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import LoginDropdownMenu from '@/components/common/ui/LoginDropdownMenu';

const DahshHeader = ({ isMinimized }: { isMinimized: boolean }) => {
  return (
    <>
      <AdminDashbordMobile />
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Rechercher..."
              className="w-full border-accent border appearance-none h-9 bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <LoginDropdownMenu />
    </>
  );
};

export default DahshHeader;
