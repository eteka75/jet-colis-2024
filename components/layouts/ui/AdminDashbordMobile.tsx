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

const AdminDashbordMobile = () => {
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
        <Link href="/" className="flex items-center gap-2 ">
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
        <nav className="grid gap-2 text-lg ">
          <Link
            href={'/admin/add-new'}
            className="my-4"
            // className="text-start mb-2 border font-medium p-2 px-4 flex gap-1 rounded-md items-center "
          >
            <Button className="border w-full">
              <Plus className="w-4 h-4" /> Ajouter
            </Button>
          </Link>
          {adminMenu.map((item) => (
            <Link
              key={item.label}
              href={item.href ?? '#'}
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
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
