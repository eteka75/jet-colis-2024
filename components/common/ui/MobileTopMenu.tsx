import React from 'react';
// 'use client';
import Link from 'next/link';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import Image from 'next/image';
import { CgMenuLeft } from 'react-icons/cg';
import {
  Bell,
  Heart,
  HelpCircle,
  Info,
  Lock,
  LogOut,
  MessageCircle,
  Plus,
  Search,
  SearchIcon,
  Settings,
  Shield,
  UserCheck,
  UserIcon,
  UserPlus,
} from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { PiPackageDuotone } from 'react-icons/pi';
import { CiHeart } from 'react-icons/ci';
import SwithtTheme from '../Header/SwithtTheme';
const MobileTopMenu = () => {
  const linkStyles =
    'flex items-center hover:text-primary gap-2 text-neutral-500 dark:text-white/80  py-2 rounded-md  dark:hover:text-primary hover:no-underline';

  return (
    <div>
      <Sheet key={'left'}>
        <SheetTrigger>
          <div className="flex gap-2 lg:hidden">
            <CgMenuLeft className="h-6 w-6" />

            <span className="sr-only">Toggle Menu</span>
          </div>
        </SheetTrigger>

        <SheetContent
          side={'left'}
          className="w-[300px] max-w-full p-0 sm:w-[440px]"
        >
          <SheetHeader>
            <div className=" border-b p-4">
              <Image
                src={logoLight}
                alt="Colistify"
                className="h-7 lg:h-9 xl:h-9 w-auto  dark:hidden"
              />
              <Image
                src={logoDark}
                alt="Colistify"
                className="h-7 lg:h-10 xl:h-10 w-auto hidden dark:flex"
              />
            </div>
          </SheetHeader>

          <div>
            <aside>
              <ul className=" text-sm border-b px-4  sm:hidden">
                <li>
                  <div className="flex gap-4 items-center  justify-between">
                    <div>Changer de thème</div>
                    <div className="text-end">
                      <SwithtTheme />
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="space-y-1 text-sm border-b p-4">
                <li>
                  <Link href="/new-travel" className={linkStyles}>
                    <Plus className="w-5 h-5" /> Plublier une offre
                  </Link>
                </li>
                <li>
                  <Link href="/search" className={linkStyles}>
                    <Search className="w-5 h-5" /> Rechercher
                  </Link>
                </li>
              </ul>
              <aside>
                <ul className="space-y-1 text-sm border-b p-4">
                  <li>
                    <Link href="/help" className={linkStyles}>
                      <HelpCircle className="w-5 h-5" /> Aide
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className={linkStyles}>
                      <Info className="w-5 h-5" /> FAQ
                    </Link>
                  </li>
                </ul>
              </aside>
              <ul className="space-y-1 text-sm border-b p-4">
                <li>
                  <Link href="/user/messages" className={linkStyles}>
                    <MessageCircle className="w-5 h-5" /> Messages
                  </Link>
                </li>
                <li>
                  <Link href="/user/favoris" className={linkStyles}>
                    <Heart className="w-5 h-5" /> Favoris
                  </Link>
                </li>

                <li>
                  <Link href="/signin" className={linkStyles}>
                    <UserCheck className="w-5 h-5" /> Se connecter
                  </Link>
                </li>
                <li>
                  <Link href="/signup" className={linkStyles}>
                    <UserPlus className="w-5 h-5" /> Créer un compte
                  </Link>
                </li>
                <li>
                  <Link href="/search/saved" className={linkStyles}>
                    <SearchIcon className="w-5 h-5" /> Recherches sauvegardés
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className={linkStyles + ' text-red-500 font-bold'}
                  >
                    <LogOut className="w-5 h-5" /> Déconnexion
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileTopMenu;
