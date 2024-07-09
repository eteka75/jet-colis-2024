import React from 'react';
// 'use client';
import Link from 'next/link';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import Image from 'next/image';
import { CgMenuLeft } from 'react-icons/cg';
import { Bell, Lock, Settings, Shield, UserIcon } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
const MobileTopMenu = () => {
  const linkStyles =
    'flex items-center gap-2 text-neutral-500 dark:text-white/80 px-4 py-2 rounded-md hover:bg-accent dark:hover:text-white hover:no-underline';

  return (
    <div>
      <Sheet key={'left'}>
        <SheetTrigger>
          <div className="flex gap-2 lg:hidden">
            <CgMenuLeft className="h-5 w-5" />

            <span className="sr-only">Toggle Menu</span>
          </div>
        </SheetTrigger>

        <SheetContent side={'left'} className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <div className="pb-4">
              <Image
                src={logoLight}
                alt="Colistify"
                className="h-8 lg:h-9 xl:h-9 w-auto  dark:hidden"
              />
              <Image
                src={logoDark}
                alt="Colistify"
                className="h-9 lg:h-10 xl:h-10 w-auto hidden dark:flex"
              />
            </div>
          </SheetHeader>
          <div className="py-4">
            <aside>
              <ul className="space-y-1 ">
                <li>
                  <Link href="/user/profil" className={linkStyles}>
                    <UserIcon className="w-5 h-5" /> Profile
                  </Link>
                </li>
                <li>
                  <Link href="/user/settings" className={linkStyles}>
                    <Settings className="w-5 h-5" /> Account Settings
                  </Link>
                </li>
                <li>
                  <Link href="/user/security" className={linkStyles}>
                    <Lock className="w-5 h-5" /> Security
                  </Link>
                </li>
                <li>
                  <Link href="/user/notifications" className={linkStyles}>
                    <Bell className="w-5 h-5" /> Notifications
                  </Link>
                </li>
                <li>
                  <Link href="/user/privacy" className={linkStyles}>
                    <Shield className="w-5 h-5" /> Privacy
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
