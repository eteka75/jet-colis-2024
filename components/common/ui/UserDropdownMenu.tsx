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
import { User } from '@/lib/definitions';
import Image from 'next/image';
import userimg from '@/public/assets/images/user/default.jpg';
import { Separator } from '@/components/ui/separator';
import SwithtTheme from '../Header/SwithtTheme';

const UserDropdownMenu = ({ user }: { user: UserProps }) => {
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
      <Separator orientation="vertical" className="h-5 hidden md:flex" />
      {user ? (
        <LoginDropdownMenu user={user} />
      ) : (
        <>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] ">
              <DialogHeader>
<<<<<<< HEAD
                <DialogTitle>Rejoignez-nous</DialogTitle>
=======
                <DialogTitle>Soyez les bienvenues</DialogTitle>
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
                <DialogDescription>
                  Si vous êtes nouveau, créez un compte ou connectez-vous avez
                  votre compte existant.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-2 py-4">
                <OAuthButtons />
                <div className="flex flex-col w-full  space-y-2">
                  <Link
                    onClick={closeDialog}
                    href={'/signup'}
                    className="block"
                  >
                    <Button
                      size={'lg'}
                      className="flex w-full py-7 rounded-full "
                    >
                      Créer un nouveau compte
                    </Button>
                  </Link>
                  <Link onClick={closeDialog} href={'/login'} className="block">
                    <Button
                      variant={'outline'}
                      size={'lg'}
                      className="flex w-full py-7 rounded-full "
                    >
                      Se connecter avec mes identifiants
                    </Button>
                  </Link>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
};

export default UserDropdownMenu;
