// components/common/Header.tsx

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, Package2 } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { IoSearchOutline } from 'react-icons/io5';
// import { FaBoxOpen, FaPlan@/components, FaUser } from 'react-icons/fa6';
import CalendarInput from '@/components/ui/CalendarInput';
import CountrySelector from '../ui/CountrySelector copy';

const SubMenu = () => {
  return (
    <div>
      <div className="border-b bg-background ">
        <header className=" top-0 flex h-16 container  items-center gap-4   ">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="/dashboard"
              className="text-muted-foreground  transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/sended"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Envois
            </Link>
            <Link
              href="/receive"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Réçus
            </Link>
            <Link
              href="/saved"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Sauvegardes
            </Link>
            <Link
              href="/settings"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Réglages
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Dashboard
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Orders
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Customers
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            {/* <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
                
              </div>
            </form> */}
            <form className="flex text-gray-900 items-center space-x-2 ml-auto flex-1 sm:flex-initial">
              {/* <Input
                type="text"
                placeholder="Point de départ"
                className="w-36  focus:w-auto transition-all ease-linear  focus:duration-200 duration-500"
              /> */}
              <CountrySelector />
              <CountrySelector />
              <CalendarInput />
              <Button variant={'secondary'} className="border" type="submit">
                <IoSearchOutline />
              </Button>
            </form>
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
          </div>
        </header>
      </div>
    </div>
  );
};

export default SubMenu;
