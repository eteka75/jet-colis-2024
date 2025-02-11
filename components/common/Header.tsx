import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { PiPackageDuotone } from 'react-icons/pi';
import MobileTopMenu from './ui/MobileTopMenu';
import clsx from 'clsx';
import MobileFooter from './ui/MobileFooter';
import { useSession } from 'next-auth/react';
import { Plus, Search } from 'lucide-react';
import { getContainer } from '@/src/lib/fn';
import { auth } from '@/auth';
import LoginDropdownMenu from './ui/LoginDropdownMenu';
import { GuestDropdownMenu } from './ui/GuestDropdownMenu';
import SwithLang from './Header/SwithLang';
import SwithtTheme from './Header/SwithtTheme';

const Header = async ({ type }: { type?: string }) => {
  const session = await auth();
  const user = session?.user;
  const classContainer = getContainer(type);
  return (
    <>
      <div className="bg-background/80 bg-opacity-90 backdrop-blur-3xl shadow-sm__ border-b  __ _bg-slate-950__text-white">
        <div className={clsx('items-center py-2 m-auto', classContainer)}>
          <div className="flex w-full h-full md:gap-4 items-center">
            <div className="lg:w-1/4 lg:min-w-[100px] lg:max-w-[400px]">
              <div className="flex items-center">
                <Link href={'/'} className="hidden lg:flex  m-0">
                  <>
                    <Image
                      src={logoLight}
                      alt="Colistify"
                      className="h-4 lg:h-6 xl:h-7 w-auto dark:hidden"
                    />
                    <Image
                      src={logoDark}
                      alt="Colistify"
                      className="h-5 lg:h-7 xl:h-7 w-auto hidden dark:flex"
                    />
                  </>
                </Link>
                <MobileTopMenu />
              </div>
            </div>
            <div className="flex-grow flex justify-center">
              <form className="w-full max-w-screen-sm px-2 md:px-4 my-2">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <Search className="h-4 w-4" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full shadow-sm bg-background dark:bg-accent dark:text-accent py-2 px-6 ps-10 text-sm rounded-full text-gray-900 border focus:bg-background focus:ring-1 focus:border-1 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-0 outline-none"
                    placeholder="Rechercher un trajet..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white rounded-full absolute top-1 bg-primary border border-primary end-1 text-xs p-2 hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                  >
                    <IoSearch />
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/4 lg:min-w-[280px] items-center flex gap-1 lg:max-w-[400px] justify-end">
              <div className="hidden md:flex">
                <Link href={'/new-travel'}>
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className=" rounded-full px-4 lg:me-1 text-pretty text-foreground  hover:bg-accent dark:hover:text-background _active:px-2.5 hover:border-background gap-1  text-sm lg:text-md shadow__border hover:dark:bg-primary dark:text-accent-foreground"
                  >
                    {/* <Plus className="h-5 w-5" /> */}
                    Publier une offre
                  </Button>
                </Link>
              </div>
              <div className="flex gap-1">
                <SwithLang />
                <SwithtTheme className="hidden md:flex" />
                {user ? (
                  <LoginDropdownMenu user={user} />
                ) : (
                  <GuestDropdownMenu />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileFooter />
    </>
  );
};

export default Header;
