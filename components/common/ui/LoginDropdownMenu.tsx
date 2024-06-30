import React, { useState } from 'react';
import Link from 'next/link';
import { CircleUser } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import userimg from '@/public/assets/images/user/default.jpg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { signOut } from '@/auth';
import { UserSession } from '@/lib/definitions';
import { handleSignOut } from '@/app/lib/actions';
// import { FaBoxOpen, FaPlane, FaUser } from 'react-icons/fa6';

const LoginDropdownMenu = ({ user }: { user: UserSession | undefined }) => {
  const [loading, setLoading] = useState(false);

  const handleSignOutClick = async () => {
    setLoading(true);
    await handleSignOut();
    setLoading(false);
  };
  return (
    <div className="flex items-center justify-center">
      {/* <div className="text-xs max-w-40 text-nowrap overflow-hidden text-ellipsis">
        Bonjour, <span className="font-medium ">{user?.name}</span>
      </div> */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            width={50}
            height={50}
            className="w-7 h-7 cursor-pointer ms-3 border-2 border-gray-200 rounded-full"
            src={userimg}
            alt="User"
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="shadow-inset border-0">
          <DropdownMenuLabel>Eteka wilfried</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/messages">Messages</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/dashboard">Colis envoyés</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/acount-money">Recette</Link>
              <DropdownMenuShortcut>5$</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/travel-offers">Mes offres de voyage</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/account">Mon compte</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/settings">Settings</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/help">Aide</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/support">Support client</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form action={handleSignOut}>
              <button type="submit">
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
