// 'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import Image from 'next/image';
import { IoSearch } from 'react-icons/io5';
import { CgMenuLeft } from 'react-icons/cg';
import { PiPackageDuotone } from 'react-icons/pi';
import { Bell, Lock, Settings, Shield, UserIcon } from 'lucide-react';
import UserDropdownMenu from './ui/UserDropdownMenu';
import { auth } from '@/auth';
import { User } from '@/src/lib/definitions';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import MobileTopMenu from './ui/MobileTopMenu';
import clsx from 'clsx';

const Header = async ({ type }: { type?: string }) => {
  // const { data: session, status } = useSession();
  const session = await auth();
  const user: User | null = session?.user as User | null;
  const classContainer =
    type === 'mini'
      ? 'container-mini'
      : type === 'moyen'
      ? 'container'
      : 'container-fluid';
  const linkStyles =
    'flex items-center gap-2 text-neutral-500 dark:text-white/80 px-4 py-2 rounded-md hover:bg-accent dark:hover:text-white hover:no-underline';

  return (
    <>
      <div className="bg-background/80 bg-opacity-90 backdrop-blur-3xl border-b">
        <div className={clsx('items-center py-4 m-auto', classContainer)}>
          <div className="flex w-full h-full md:gap-4 items-center">
            <div className="lg:w-1/4 lg:min-w-[100px] lg:max-w-[400px] ">
              <div className="flex items-center">
                <Link href={'/'} className="hidden lg:flex  m-0">
                  <Image
                    src={logoLight}
                    alt="Colistify"
                    className="h-4 lg:h-6 xl:h-8 w-auto  dark:hidden"
                  />
                  <Image
                    src={logoDark}
                    alt="Colistify"
                    className="h-6 lg:h-8 xl:h-9 w-auto hidden dark:flex"
                  />
                </Link>
                <MobileTopMenu />
              </div>
            </div>
            <div className="flex-grow flex justify-center">
              <form className="w-full max-w-screen-sm px-2 md:px-4">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-3 h-3 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full shadow-sm bg-background dark:bg-accent  dark:text-accent py-2 px-6 ps-10 text-sm rounded-full
                     text-gray-900 border focus:bg-background focus:ring-1 focus:border-1
                       dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-0 dark:focus:border-0 outline-none"
                    placeholder="Rechercher un trajet..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white rounded-full absolute top-1 bg-primary border border-primary end-1 text-xs p-2 hover:bg-primary/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
                     dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
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
                    className="rounded-full bg-background hover:bg-primary hover:text-background active:px-2.5 hover:border-background gap-1 border text-sm lg:text-md shadow__border dark:bg-primary dark:text-accent-foreground "
                  >
                    <PiPackageDuotone />
                    Publier une offre
                  </Button>
                </Link>
              </div>
              <UserDropdownMenu user={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
