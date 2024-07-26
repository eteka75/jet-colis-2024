'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { adminMenu } from '@/src/lib/admin-user-menu';
import { Menu, Plus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import { useSidebar } from '@/hooks/useSidebar';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

const AdminDashbordMobile = ({ page = 'dashboard' }: { page: string }) => {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 border-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <Link href="/" className="flex items-center  ">
          <div>
            <Image
              src={logoLight}
              alt="Colistify"
              className="h-8 lg:h-6 xl:h-7 w-auto  dark:hidden"
            />
            <Image
              src={logoDark}
              alt="Colistify"
              className="h-8 lg:h-7 xl:h-7 w-auto hidden dark:flex"
            />
            <span className="sr-only">Colisfly</span>
          </div>
        </Link>
        <Link
          href={'/admin/add-new'}
          className=""
          // className="text-start mb-2 border font-medium p-2 px-4 flex gap-1 rounded-md items-center "
        >
          <Button size={'sm'} className="border  w-full">
            <Plus className="w-4 h-4" /> Ajouter
          </Button>
        </Link>
        <nav className="grid gap-2 mx-2">
          {adminMenu.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href ?? '#'}
                className={cn(
                  'mx-[-0.65rem] flex text-sm items-center gap-4 rounded-sm px-3 py-1 text-muted-foreground hover:text-foreground',
                  page === item.name
                    ? 'bg-primary/10 font-semibold text-primary hover:text-primary hover:bg-primary/20'
                    : 'transparent'
                )}
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                <span>{item.label}</span>
              </Link>
              {item.subMenu && (
                <div className={cn(isMinimized ? 'pl-2' : 'pl-4')}>
                  <div
                    className={cn(
                      isMinimized ? 'pl-2 flex flex-col gap-1' : 'border-l pl-2'
                    )}
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href ?? '#'}
                        className={cn(
                          'flex items-center gap-2 overflow-hidden rounded-md py-1 text-xs text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground',
                          page === subItem.name
                            ? 'bg-primary/10 font-semibold text-primary hover:text-primary hover:bg-primary/20'
                            : 'transparent',
                          subItem.disabled && 'cursor-not-allowed opacity-80'
                        )}
                      >
                        <span className="mx-2 text-xs truncate">
                          {subItem.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto">
          <Card x-chunk="dashboard-02-chunk-0">
            <CardHeader className="p-2 pt-0 md:p-4">
              <CardTitle>Passer à l'option Pro</CardTitle>
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
      </SheetContent>
    </Sheet>
  );
};

export default AdminDashbordMobile;
