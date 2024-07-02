// 'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import Image from 'next/image';
import SwithtTheme from './Header/SwithtTheme';
import { IoSearch } from 'react-icons/io5';
import { CgMenuLeft } from 'react-icons/cg';
import { PiPackageDuotone } from 'react-icons/pi';
import LoginDropdownMenu from './ui/LoginDropdownMenu';
import { CircleUser } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import OAuthButtons from './ui/OAuthButtons';
import UserDropdownMenu from './ui/UserDropdownMenu';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { useSession } from 'next-auth/react';
import { auth } from '@/auth';

const Header = async () => {
  // const { data: session, status } = useSession();
  const session = await auth();
  const user = session?.user || null;

  // const [locale, setLocale] = useState('fr');
  // const [Authenticated, setAuthenticated] = useState(false);

  // const handleChangeLanguage = () => {
  //   const newLocale = locale === 'fr' ? 'en' : 'fr';
  //   setLocale(newLocale);
  // };

  return (
    <>
<<<<<<< HEAD
      <div className="bg-accent_ bg-background/80 bg-opacity-90 backdrop-blur-3xl ">
        <div className="container-fluid items-center py-4 m-auto">
          <div className="flex w-full h-full gap-4 items-center">
            <div className="md:w-1/4 md:min-w-[100px] md:max-w-[400px] flex ">
              <div className="items-center">
                <Link href={'/'} className="hidden lg:flex  m-0">
=======
      <div className="bg-accent_ bg-background/80 bg-opacity-90 backdrop-blur-3xl dark:border-b">
        <div className="container-fluid items-center py-4 m-auto">
          <div className="flex w-full h-full gap-2 items-center">
            <div className="md:w-1/4 md:min-w-[100px] md:max-w-[500px] flex ">
              <div className="items-center">
                <Link href={'/'} className="hidden lg:flex md:me-10 m-0">
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
                  <Image
                    src={logoLight}
                    alt="Colistify"
                    className="h-4 lg:h-6 xl:h-8 w-auto  dark:hidden"
                  />
                  <Image
                    src={logoDark}
                    alt="Colistify"
                    className="h-4 lg:h-6 xl:h-8 w-auto hidden dark:flex"
                  />
                </Link>
                <Button size="sm" variant="ghost" className="flex lg:hidden">
                  <CgMenuLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </div>
              <nav className="hidden">
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  A propos
                </Link>
                <Link
                  href="/saved"
                  className="transition-colors hover:text-white"
                >
                  Tarifs
                </Link>
                <Link
                  href="/help"
                  className="transition-colors hover:text-white"
                >
                  Aide
                </Link>
              </nav>
            </div>
            <div className="flex-grow flex justify-center">
<<<<<<< HEAD
              <form className="w-full max-w-screen-sm px-2 md:px-4">
=======
              <form className="w-full max-w-md px-2 md:px-4">
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
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
                    className="block w-full shadow-sm dark:bg-accent  dark:text-accent py-2 px-6 ps-10 text-sm rounded-full
                     text-gray-900 border focus:bg-background focus:ring-0 focus:border-0
                       dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-0 dark:focus:border-0"
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

<<<<<<< HEAD
            <div className="md:w-1/4 md:min-w-[250px] items-center flex gap-1 md:max-w-[400px] justify-end">
=======
            <div className="md:w-1/4 md:min-w-[250px] items-center flex gap-1 md:max-w-[500px] justify-end">
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
              <div className="hidden md:flex">
                <Link href={'/send'}>
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="rounded-full gap-1 text-xs lg:text-md shadow bg-white dark:bg-primary dark:text-accent-foreground border hover:bg-accent"
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
