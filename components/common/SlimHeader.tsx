// 'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import Image from 'next/image';
import { X } from 'lucide-react';
import { auth } from '@/auth';
import { User } from '@/src/lib/definitions';
import MobileTopMenu from './ui/MobileTopMenu';
import SwithtTheme from './Header/SwithtTheme';
import SwithLang from './Header/SwithLang';

const SlimHeader = async () => {
  // const { data: session, status } = useSession();
  const session = await auth();
  const user: User | null = session?.user as User | null;

  const linkStyles =
    'flex items-center gap-2 text-neutral-500 dark:text-white/80 px-4 py-2 rounded-md hover:bg-accent dark:hover:text-white hover:no-underline';

  return (
    <>
      <div className=" bg-background/80 bg-opacity-90 backdrop-blur-3xl border-b  _border-accent ">
        <div className="container items-center py-2 m-auto">
          <div className="flex w-full h-full md:gap-4 items-center">
            <div className="lg:w-1/4 lg:min-w-[100px] lg:max-w-[400px] ">
              <div className="flex items-center">
                <Link href={'/'} className="hidden lg:flex  m-0">
                  <Image
                    src={logoLight}
                    alt="Colistify"
                    className="h-4 lg:h-6 xl:h-6 w-auto  dark:hidden"
                  />
                  <Image
                    src={logoDark}
                    alt="Colistify"
                    className="h-6 lg:h-7 xl:h-7 w-auto hidden dark:flex"
                  />
                </Link>
                <MobileTopMenu />
              </div>
            </div>
            <div className="flex-grow  justify-center "></div>

            <div className="lg:w-1/4 lg:min-w-[250px] min-w-2  items-center flex gap-1 lg:max-w-[400px] justify-end">
              <SwithLang />
              <span className="hidden sm:flex">
                <SwithtTheme />
              </span>
              <div className=" flex">
                <Link href={'/'}>
                  <Button
                    size={'sm'}
                    variant={'ghost'}
                    className="rounded-full gap-1 border text-sm lg:text-md shadow__border  dark:text-accent-foreground  hover:bg-accent"
                  >
                    <X />
                    <span className="hidden md:flex"> Quitter</span>
                  </Button>
                </Link>
              </div>
              {/* <UserDropdownMenu user={user} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlimHeader;
