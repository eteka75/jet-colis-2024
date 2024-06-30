'use client';
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

const Header = () => {
  const [locale, setLocale] = useState('fr');
  const [Authenticated, setAuthenticated] = useState(false);

  const handleChangeLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    setLocale(newLocale);
  };

  return (
    <>
      <div className="bg-accent ">
        <div className="container items-center py-4 m-auto">
          <div className="flex items-center justify-between space-x-2 md:space-x-4">
            <div className="flex items-center md:space-x-4">
              <div className="items-center">
                <Link href={'/'} className="hidden lg:flex md:me-10 m-0">
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

            <div className="flex-1 flex justify-start">
              <form className="w-full max-w-xl px-4">
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
                    className="block w-full bg-white dark:text-accent py-2 px-6 ps-10 text-sm rounded-full
                     text-gray-900 border border-gray-300 focus:ring-primary focus:border-primary
                       dark:placeholder-gray-400 dark:text-white
                      dark:focus:ring-primary dark:focus:border-primary"
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

            <div className="flex items-center md:space-x-2">
              <div className="hidden md:flex">
                <Link href={'/send'}>
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="rounded-full gap-1 shadow bg-white dark:bg-primary dark:text-accent-foreground border hover:bg-accent"
                  >
                    <PiPackageDuotone />
                    Publier mon offre
                  </Button>
                </Link>
              </div>
              <Button
                onClick={handleChangeLanguage}
                className="text-xs hidden md:flex"
                variant={'ghost'}
                size={'sm'}
              >
                {locale === 'fr' ? 'EN' : 'FR'}
              </Button>
              <span className="hidden md:flex">
                <SwithtTheme />
              </span>
              <Separator
                orientation="vertical"
                className="h-5 hidden md:flex"
              />
              <UserDropdownMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
