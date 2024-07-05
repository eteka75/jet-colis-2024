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
import userimg from '@/public/assets/images/user/default.jpg';
import { handleSignOut } from '@/lib/actions';
import { UserSession } from '@/lib/definitions';
import { BiMessageSquare } from 'react-icons/bi';
import { LuPackageCheck, LuUser2 } from 'react-icons/lu';
import { IoIosHelpCircleOutline, IoIosLogOut } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';

const LoginDropdownMenu = ({ user }: { user: UserSession | undefined }) => {
  const [loading, setLoading] = useState(false);

  const handleSignOutClick = async () => {
    setLoading(true);
    await handleSignOut();
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            width={50}
            height={50}
            className="w-7 h-7 min-w-7 min-h-7 cursor-pointer ms-2  border-2 border-gray-200 rounded-full"
            src={userimg}
            alt="User"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="shadow-inset_ min-w-[220px]  mt-1 mr-[-5px]  border-slate-100 dark:border-accent _pointu"
        >
          <div className="absolute  z-0 top-[-4px] animate-accordion-up duration-1000 right-[5px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-100 dark:border-b-slate-500"></div>

          <DropdownMenuLabel>
            <Link href="/account">{user?.name || 'Utilisateur'}</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/user/profil" className="flex items-center">
                <LuUser2 className="mr-2 h-4 w-4" /> Mon compte
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/user/messages" className="flex items-center">
                <BiMessageSquare className="mr-2 h-4 w-4" /> Messagerie
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/dashboard" className="flex items-center">
                <LuPackageCheck className="mr-2 h-4 w-4" />
                Mes colis
              </Link>
            </DropdownMenuItem>
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href="/travel-offers" className="flex items-center">
                  <GiReceiveMoney className="mr-2 h-4 w-4" />
                  Mes offres de livraison
                </Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/help" className="flex items-center">
              <IoIosHelpCircleOutline className="mr-2 h-4 w-4" />
              Aide
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={handleSignOut}>
              <button type="submit" className="flex items-center">
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
