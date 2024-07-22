import Link from 'next/link';
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  MenuIcon,
  Package,
  Package2,
  Plus,
  PlusCircle,
  Search,
  ShoppingCart,
  Users,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Metadata } from 'next';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import LightLayout from '@/components/layouts/LightLayout';
import Image from 'next/image';
import { adminMenu } from '@/src/lib/admin-user-menu';

export const metadata: Metadata = {
  title: 'Tableau de bord',
};

const DashboardLayout = ({
  type,
  children,
}: {
  type?: string;
  children: ReactNode;
}) => {
  return (
    <>
      <LightLayout>
      <div className="container_">
        <div className="grid border-t_  min-h-screen w-full md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr]">
          <div className="hidden border-r border-accent shadow-lg border-l shadow-sm md:block">
            <div className="flex h-full max-h-screen overflow-auto flex-col gap-2">
              <div className="flex border-b h-14 items-center  border-accent px-4 lg:h-[60px] lg:px-6">
                <div>
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-semibold"
                  >
                    <Image
                      src={logoLight}
                      alt="Colistify"
                      className="h-4 lg:h-6 xl:h-7 w-auto  dark:hidden"
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
                <nav className="grid items-start px-2 text-sm  lg:px-4">
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
                      href={item.href}
                      className="flex items-center hover:bg-accent gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="mt-auto p-4">
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
            </div>
          </div>
          <div className="flex flex-col border-r border-b">
            <header className="flex h-14 bg-background  items-center gap-4 border-b border-accent px-4 lg:h-[60px] lg:px-6">
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
                    {' '}
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
                        href={item.href}
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
                          Débloquez toutes les fonctionnalités et obtenez un
                          accès illimité à notre équipe d'assistance.
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
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Rechercher..."
                      className="w-full border-accent border appearance-none h-9 bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                    />
                  </div>
                </form>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>

            <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:px-6">
            {children}              
            </main>
          </div>
        </div>
      </div>
    </LightLayout>
    </>
  );
};
export default DashboardLayout;
