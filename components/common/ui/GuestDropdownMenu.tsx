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
import { LuPackageCheck, LuUser2 } from 'react-icons/lu';
import {
  IoIosHelpCircleOutline,
  IoIosLogOut,
  IoMdArrowDropdown,
} from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CircleUser } from 'lucide-react';
import { AlertDialogHeader } from '@/components/ui/alert-dialog';
import Login from '@/app/(guest)/signin/Form/Login';
import { Button } from '@/components/ui/button';

export const GuestDropdownMenu = () => {
  const [loading, setLoading] = useState(false);

  const handleSignOutClick = async () => {
    setLoading(true);
    await handleSignOut();
    setLoading(false);
  };

  const [open, setOpen] = useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <div className="flex items-center justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="p-1 shadow border border-accent-500 flex gap-.5  items-center rounded-full">
            <CircleUser className="h-6 w-6 cursor-pointer" />
            <IoMdArrowDropdown />{' '}
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-44 mt-1">
          <div className="absolute  z-0 top-[-4px] animate-accordion-up duration-1000 right-[5px] w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-100 dark:border-b-slate-500"></div>

          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link href="/login" className="flex items-center py-1">
                <span> Se connecter</span>
              </Link>
              {/* <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild></DialogTrigger>
                <DialogContent className="sm:max-w-[425px] ">
                  <DialogHeader>
                    <DialogTitle>Rejoignez-nous</DialogTitle>
                  </DialogHeader>
                  <Login />
                </DialogContent>
              </Dialog> */}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/signup" className="flex items-center py-1">
                {/* <LuPackageCheck className="mr-2 h-4 w-4" /> */}
                Créer un compte
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link href="/help" className="flex items-center py-1">
              {/* <IoIosHelpCircleOutline className="mr-2 h-4 w-4" /> */}
              Aide
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/faq" className="flex items-center py-1">
              <IoIosHelpCircleOutline className="mr-2 h-4 w-4" />
              FAQ
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
