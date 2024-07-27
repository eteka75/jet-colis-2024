'use client';
import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { handleSignOut } from '@/src/lib/actions';
import { BadgeCheck, Gauge, PackagePlus } from 'lucide-react';
import Link from 'next/link';
import { BiMessageSquare } from 'react-icons/bi';
import { GiReceiveMoney } from 'react-icons/gi';
import { IoIosHelpCircleOutline, IoIosLogOut } from 'react-icons/io';
import { LuUser2 } from 'react-icons/lu';

import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenuShortcut } from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
import { GuestDropdownMenu } from './GuestDropdownMenu';
import { auth } from '@/auth';
import { User } from '@prisma/client';

const LoginDropdownMenu = async ({ user }: { user: User }) => {
  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="relative h-8 w-8  dark:border-accent rounded-full"
          >
            <Avatar className="h-8 w-8 min-w-8 min-h-8">
              <AvatarImage src={user?.image ?? ''} alt={user?.name ?? ''} />
              <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 text-xs" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user?.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user?.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/dashboard/" className="flex items-center  py-1__">
                <Gauge className="mr-2 h-4 w-4" /> Tableau de bord
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/user/profil" className="flex items-center py-1__">
                <LuUser2 className="mr-2 h-4 w-4" /> Mon compte
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/user/messages" className="flex items-center py-1__">
                <BiMessageSquare className="mr-2 h-4 w-4" /> Messagerie
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  href="/travel-offers"
                  className="flex items-center py-1__"
                >
                  <PackagePlus className="mr-2 h-4 w-4" />
                  Mes offres de livraison
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/dashboard" className="flex items-center py-1__">
                <BadgeCheck className="mr-2 h-4 w-4" />
                Colis reçus
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/help" className="flex items-center py-1__">
              <IoIosHelpCircleOutline className="mr-2 h-4 w-4" />
              Aide
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={handleSignOut}>
              <button type="submit" className="flex items-center py-1__">
                <IoIosLogOut className="mr-2 h-4 w-4" /> Se déconnecter
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return <GuestDropdownMenu />;
  }
};
export default LoginDropdownMenu;
