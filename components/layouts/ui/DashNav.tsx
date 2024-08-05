'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { adminMenu } from '@/src/lib/admin-user-menu';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSidebar } from '@/hooks/useSidebar';

import page from '@/app/page';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import { cn } from '@/src/lib/utils';
import { useState } from 'react';
import { clsx } from 'clsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import AdminDashbordMobile from './AdminDashbordMobile';

const DashNav = ({
  page = 'home',
  isMobileNav = false,
  className,
}: {
  page?: string;
  isMobileNav?: boolean;
  className?: string;
}) => {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null); // État pour suivre le menu ouvert

  if (!adminMenu?.length) {
    return null;
  }

  const handleMenuClick = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };
  return (
    <>
      <div className="flex bg-background h-full max-h-screen _bg-[#f1f5f9] overflow-auto flex-col gap-2 w-full">
        <div className="flex border-b_  h-14 items-center  border-accent__ px-4 lg:h-[61px] lg:px-6 ">
          <div>
            <Link
              href="/"
              className={cn(
                ' items-center gap-2 font-semibold',
                isMinimized ? 'hidden' : 'flex'
              )}
            >
              <Image
                src={logoLight}
                alt="Colistify"
                className="h-5 w-auto  dark:hidden"
              />
              <Image
                src={logoDark}
                alt="Colistify"
                className="h-5 lg:h-7 xl:h-7 w-auto hidden dark:flex"
              />
            </Link>
          </div>
          {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <MenuIcon className="h-4 w-4" />
                <span className="sr-only">Toggle Menu</span>
              </Button> */}
        </div>

        <div className="flex-1">
          {/* <nav className="grid items-start px-2 text-sm  lg:px-4 gap-1"> */}
          <nav
            className={cn(
              `grid items-start px-2 text-sm  lg:px-4 gap-1`,
              status && 'duration-500'
              // !isMinimized ? 'w-72' : 'w-[72px]',
              // className
            )}
          >
            {/* <Link
              href={'/admin/add-new'}
              className="mt-4"
              // className="text-start mb-2 border  p-2 px-4 flex gap-1 rounded-md items-center "
            >
              {isMobileNav || (!isMinimized && !isMobileNav) ? (
                <Button variant={'outline'} className="border w-full">
                  <Plus className="w-4 h-4" />
                  <span className="mr-2 truncate">Ajouter</span>
                </Button>
              ) : (
                <Button className="border ">
                  <Plus className="w-4 h-4" />
                </Button>
              )}
            </Link> */}

            <TooltipProvider>
              {adminMenu.map((item, index) => (
                <div key={index}>
                  <Tooltip>
                    <TooltipTrigger asChild className="justify-between">
                      {item.subMenu ? (
                        <div
                          className={`flex h-8  mb-1 items-center  gap-2 overflow-hidden rounded-md py-1.5 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                            page === item.name
                              ? 'bg-primary/10 font-semibold text-primary hover:text-primary hover:bg-primary/20'
                              : 'transparent'
                          } 
                          ${isMinimized && 'w-14'}
                          ${item.disabled && 'cursor-not-allowed opacity-80'}
                          `}
                          onClick={() =>
                            item.subMenu ? handleMenuClick(item.name!) : null
                          } // Gérer le clic pour ouvrir/fermer le sous-menu
                        >
                          <span className="flex gap-2  items-center ">
                            {item.icon && (
                              <item.icon className="ml-3 size-3.5" />
                            )}
                            {isMobileNav || (!isMinimized && !isMobileNav) ? (
                              <span className="mr-2 truncate">
                                {item.label}
                              </span>
                            ) : (
                              ''
                            )}
                          </span>
                          {item.subMenu && (
                            <ChevronRight
                              className={`transition-transform me-2 ${
                                openMenu === item.name ? 'rotate-90' : ''
                              }`}
                            />
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href ?? '#'}
                          className={`flex items-center  gap-2 overflow-hidden rounded-md py-1 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground cursor-pointer ${
                            page === item.name
                              ? 'bg-primary/10 font-semibold text-primary hover:text-primary hover:bg-primary/20'
                              : 'transparent'
                          } ${
                            item.disabled && 'cursor-not-allowed opacity-80'
                          }`}
                          // Gérer le clic pour ouvrir/fermer le sous-menu
                        >
                          <span className="flex gap-2 items-center ">
                            {' '}
                            {item.icon && (
                              <item.icon className="ml-3 size-3.5" />
                            )}
                            {isMobileNav || (!isMinimized && !isMobileNav) ? (
                              <span className="mr-2 truncate">
                                {item.label}
                              </span>
                            ) : (
                              ''
                            )}
                          </span>
                        </Link>
                      )}
                    </TooltipTrigger>
                    <TooltipContent
                      align="center"
                      side="right"
                      sideOffset={8}
                      className={!isMinimized ? 'hidden' : 'inline-block'}
                    >
                      {item.label}
                    </TooltipContent>
                  </Tooltip>
                  {item.subMenu && openMenu === item.name && (
                    <div className={cn(isMinimized ? 'pl-2' : 'pl-4')}>
                      <div
                        className={cn(
                          isMinimized ? 'flex flex-col gap-1' : 'border-l  pl-2'
                        )}
                      >
                        {item.subMenu.map((subItem, subIndex) =>
                          isMinimized ? (
                            <Tooltip>
                              <TooltipTrigger>
                                <Link
                                  key={subIndex}
                                  href={subItem.href ?? '#'}
                                  className={`flex items-center gap-2 w-full overflow-hidden rounded-md py-1 text-xs text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground ${
                                    page === subItem.name
                                      ? 'bg-primary/10 font-semibold  text-primary hover:text-primary hover:bg-primary/20'
                                      : 'transparent'
                                  }
                           
                            ${
                              subItem.disabled &&
                              'cursor-not-allowed opacity-80'
                            }`}
                                >
                                  {subItem.icon && (
                                    <subItem.icon className="mx-auto size-4" />
                                  )}
                                </Link>
                              </TooltipTrigger>
                              <TooltipContent
                                align="center"
                                side="right"
                                sideOffset={8}
                                className={
                                  !isMinimized ? 'hidden' : 'inline-block'
                                }
                              >
                                {subItem.label}
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <Link
                              key={subIndex}
                              href={subItem.href ?? '#'}
                              className={`flex items-center gap-2 w-full overflow-hidden rounded-md py-1 text-xs text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground ${
                                page === subItem.name
                                  ? 'bg-primary/10 font-semibold text-primary hover:text-primary hover:bg-primary/20'
                                  : 'transparent'
                              } ${
                                subItem.disabled &&
                                'cursor-not-allowed opacity-80'
                              }`}
                            >
                              <span className="mx-2 truncate">
                                {subItem.label}
                              </span>
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </TooltipProvider>
          </nav>
        </div>
        {isMobileNav || (!isMinimized && !isMobileNav) ? (
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle className="text-lg">Passer à l'option Pro</CardTitle>
                <CardDescription>
                  Débloquez toutes les fonctionnalités et obtenez un accès
                  illimité à notre équipe d'assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Link href="/upgrade">
                  <Button size="sm" className="w-full">
                    Passer à l'option Pro
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ) : (
          ''
        )}
      </div>
      {/* <div className="relative w-full bg-red-800"> */}

      {/* </div> */}
    </>
  );
};

export default DashNav;
