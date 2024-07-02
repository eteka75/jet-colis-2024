'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import OAuthButtons from '@/components/common/ui/OAuthButtons';
import LineSeparator from '@/components/common/ui/LineSeparator';
import { authenticate } from '@/lib/server-actions';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { PiLockKeyLight } from 'react-icons/pi';
import { IoIosAt } from 'react-icons/io';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);

    try {
      const result = await authenticate(undefined, formData);
      if (result) {
        setErrorMessage(result);
      }
    } catch (error) {
      console.log('Erreur', error);
      setErrorMessage('Something went wrong.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="md:py-12 py-8 md:min-h bg-accent">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <Card className="md:py-4 mx-auto max-w-sm">
            <div>
              <CardHeader>
                <CardTitle className="text-2xl">Connexion</CardTitle>
                <CardDescription>
                  Renseignez vos identifiants pour vous connecter.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {errorMessage && (
                  <>
                    <p className="flex gap-2">
                      <MdOutlineErrorOutline className="h-5 w-5 text-red-500" />
                      <p className="text-sm text-red-500">{errorMessage}</p>
                    </p>
                  </>
                )}

                <div className="grid gap-2">
                  {/* <Label htmlFor="email">Email</Label> */}
                  <div className="relative">
                    <Input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                    />
                    <IoIosAt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
                <div className="grid gap-2">
                  {/* <Label htmlFor="password">Mot de passe</Label> */}
                  <div className="relative">
                    <Input
                      className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                      id="password"
                      type="password"
                      name="password"
                      required
                      placeholder="Mot de passe"
                    />
                    <PiLockKeyLight className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                      <Switch id="remember-me" name="remember-me" />
                      <Label htmlFor="remember-me" className="text-xs">
                        {' '}
                        Se souvenir de moi
                      </Label>
                    </div>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-primary text-xs hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
                <Button
                  className="w-full mt-2"
                  type="submit"
                  disabled={isPending}
                >
                  {isPending ? 'Connexion en cours...' : 'Se connecter'}
                </Button>
              </CardContent>
            </div>
            <div>
              <CardContent>
                <LineSeparator>ou</LineSeparator>
                <div className="py-4">
                  <OAuthButtons />
                </div>
              </CardContent>
            </div>
            <CardFooter>
              <div className="text-center w-full text-sm">
                Vous n'avez pas de compte ?{' '}
                <Link href="/signup" className="text-blue-500 hover:underline">
                  Inscrivez-vous
                </Link>
              </div>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default Login;
