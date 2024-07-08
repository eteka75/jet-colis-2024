'use client';

import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CircleUser } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import OAuthButtons from './OAuthButtons';
import LoginDropdownMenu from './LoginDropdownMenu';
import { Button } from '@/components/ui/button';
import { User, UserType } from '@/src/lib/definitions';
import Image from 'next/image';
import userimg from '@/public/assets/images/user/default.jpg';
import { Separator } from '@/components/ui/separator';
import SwithtTheme from '../Header/SwithtTheme';
import { DefaultSession } from 'next-auth';
import Login from '@/app/(guest)/signin/Form/Login';
import { GuestDropdownMenu } from './GuestDropdownMenu';

const UserDropdownMenu = ({ user }: { user: User | null }) => {
  //const { data: session, status } = useSession();
  //const [user, setUser] = useState<User | null>(null);
  const [locale, setLocale] = useState('fr');

  const handleChangeLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    setLocale(newLocale);
  };
  const [open, setOpen] = useState(false);
  const closeDialog = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleChangeLanguage}
        className="text-xs hidden md:flex"
        variant={'ghost'}
        size={'sm'}
      >
        {locale === 'fr' ? 'EN' : 'FR'}
      </Button>
      <span className="hidden sm:flex">
        <SwithtTheme />
      </span>
      <div className="flex max-w-full items-center gap-2">
        {/* <Separator orientation="vertical" className="h-5 hidden md:flex" /> */}
        {user ? (
          <LoginDropdownMenu user={user} />
        ) : (
          <>
            <GuestDropdownMenu />
          </>
        )}
      </div>
    </>
  );
};

export default UserDropdownMenu;
