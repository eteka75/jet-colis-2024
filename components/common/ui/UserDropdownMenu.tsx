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

const UserDropdownMenu = () => {
  const { data: session, status } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    if (session && session.user) {
      setUser(session.user as User);
    } else {
      setUser(null);
      setLoading(false);
    }
  }, [session]);
  const [open, setOpen] = useState(false);
  const openDialog = () => setOpen(true);
  const closeDialog = () => setOpen(false);

  return (
    <>
      {user && !loading ? (
        <LoginDropdownMenu user={user} />
      ) : (
        <>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Image
                width={50}
                height={50}
                className="w-7 h-7 cursor-pointer ms-3 border-2 border-gray-200 rounded-full"
                src={userimg}
                alt="User"
              />
              {/* <Button variant="ghost" size="sm">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Button> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Soyez les bienvenues</DialogTitle>
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
                      className="flex w-full py-6 rounded-full "
                    >
                      Créer un nouveau compte
                    </Button>
                  </Link>
                  <Link onClick={closeDialog} href={'/login'} className="block">
                    <Button
                      variant={'outline'}
                      size={'lg'}
                      className="flex w-full py-6 rounded-full "
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
