import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import userimg from '@/public/assets/images/user/default2.jpg';
import { handleSignOut } from '@/src/lib/actions';
import { UserSession } from '@/src/lib/definitions';
import { BiMessageSquare } from 'react-icons/bi';
import { LuUser2 } from 'react-icons/lu';
import { IoIosHelpCircleOutline, IoIosLogOut } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';
import { BadgeCheck } from 'lucide-react';

const LoginDropdownMenu = ({ user }: { user: UserSession | undefined }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            width={50}
            height={50}
            className="w-9 h-9 min-w-9 min-h-9 cursor-pointer md:ms-1 lg:ms-2  border-2 border-gray-200 rounded-full"
            src={userimg}
            alt="User"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="shadow-inset_ min-w-[220px] max-w-[270px]  mt-1   border-slate-100 dark:border-accent _pointu"
        >
          <div className="absolute  z-0 top-[-4px] animate-accordion-up duration-1000 right-[5px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-100 dark:border-b-slate-500"></div>

          <DropdownMenuLabel>
            <div
              title={user?.name || 'Utilisateur'}
              className="text-nowrap text-ellipsis overflow-hidden"
            >
              <Link href="/user">
                {user?.name || 'Utilisateur'}
                <br />
                <div className="text-xs opacity-50">
                  {user?.profilId ? '@' + user.profilId : 'Mon profil'}
                </div>
              </Link>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/user/profil" className="flex items-center py-1">
                <LuUser2 className="mr-2 h-4 w-4" /> Mon compte
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/user/messages" className="flex items-center py-1">
                <BiMessageSquare className="mr-2 h-4 w-4" /> Messagerie
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/travel-offers" className="flex items-center py-1">
                  <GiReceiveMoney className="mr-2 h-4 w-4" />
                  Mes offres de livraison
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/dashboard" className="flex items-center py-1">
                <BadgeCheck className="mr-2 h-4 w-4" />
                Colis reçus
              </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/help" className="flex items-center py-1">
              <IoIosHelpCircleOutline className="mr-2 h-4 w-4" />
              Aide
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={handleSignOut}>
              <button type="submit" className="flex items-center py-1">
                <IoIosLogOut className="mr-2 h-4 w-4" />{' '}
                {loading ? 'Signing out...' : 'Sign out'}
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LoginDropdownMenu;
