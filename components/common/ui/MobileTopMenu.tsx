import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CgMenuLeft } from 'react-icons/cg';
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Label } from '@/components/ui/label';

import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';

import menuItems from '@/src/lib/UserMeniItems';
import SwithtTheme from '../Header/SwithtTheme';

const MobileTopMenu: React.FC = () => {
  const linkStyles =
    'flex text-lg md:text-md items-center hover:text-primary gap-2 text-neutral-500 dark:text-white/80 py-2 rounded-md dark:hover:text-primary hover:no-underline';

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
          className="w-[300px] h-full overflow-auto p-0 sm:w-[440px] max-w-full"
        >
          <SheetHeader className="h-14 flex flex-col">
            <div className="border-b p-4">
              <Image
                src={logoLight}
                alt="Colistify"
                className="h-6 lg:h-9 xl:h-9 w-auto dark:hidden"
              />
              <Image
                src={logoDark}
                alt="Colistify"
                className="h-7 lg:h-10 xl:h-10 w-auto hidden dark:flex"
              />
            </div>
          </SheetHeader>

          <div className="overflow-auto h-min">
            <aside>
              <ul className="text-sm border-b px-4 sm:hidden">
                <li>
                  <div className="flex font-bold gap-4 text-foreground items-center justify-between">
                    <Label id="theme" htmlFor="btntheme" className="py-2">
                      {menuItems.themeSwitcher.label}
                    </Label>
                    <div className="text-end">
                      {/* Assuming SwithtTheme is imported as a component */}
                      <SwithtTheme />
                    </div>
                  </div>
                </li>
              </ul>
              <ul className="space-y-1 text-sm border-b px-4 py-2">
                {menuItems.mainLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className={linkStyles}>
                      <item.icon className="w-5 h-5" /> {item.text}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-1 text-sm border-b px-4 py-2">
                {menuItems.userLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className={linkStyles}>
                      <item.icon className="w-5 h-5" /> {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              <aside>
                <ul className="space-y-1 text-sm border-b px-4 py-2">
                  {menuItems.helpLinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.href} className={linkStyles}>
                        <item.icon className="w-5 h-5" /> {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
              <ul className="space-y-1 text-sm border-b px-4 py-2">
                {menuItems.authLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className={linkStyles}>
                      <item.icon className="w-5 h-5" /> {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <SheetFooter className="absolute_bottom-0 bg-background w-full">
            <div>
              <aside>
                <ul className="space-y-1 text-sm border-b px-4">
                  {menuItems.footerLinks.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className={
                          linkStyles +
                          (item.className ? ` ${item.className}` : '')
                        }
                      >
                        {item.text}
                        <item.icon className="w-5 h-5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileTopMenu;
