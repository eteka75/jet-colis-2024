import React from 'react';
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
import user from '@/public/assets/images/user/default.jpg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
// import { FaBoxOpen, FaPlane, FaUser } from 'react-icons/fa6';
const LoginDropdownMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Image
            width={50}
            height={50}
            class="w-7 h-7 cursor-pointer ms-3 border-2 border-gray-200 rounded-full"
            src={user}
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
              <Link href="/colis-send">Colis envoyés</Link>
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
            <Link href="/colis-send"> Se déconnecter</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LoginDropdownMenu;
