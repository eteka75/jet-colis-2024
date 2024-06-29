import React from 'react';

// import { useTranslation } from 'next-i18next';
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
import { useTranslations } from 'next-intl';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const Form1 = () => {
  return (
    <div className="container">
      <Card className=" md:my-5 border-none mx-auto shadow-none max-w-md">
        <div className="max-w-sm m-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Connexion</CardTitle>
            <CardDescription>
              Renseignez vos identifiants pour vous connecter.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me" className="ml-2">
                  Se souvenir de moi
                </Label>
              </div>
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline text-sm"
              >
                Mot de passe oublié ?
              </a>
            </div>
            <Button className="w-full mt-4">Se connecter</Button>
          </CardContent>
        </div>
        <CardContent>
          <div className="text-center">
            <div className="grid gap-2 mt-5 text-center">
              <div className="md:flex md:flex-wrap  justify-center md:space-y-0 space-y-2 md:space-x-4">
                <Button
                  variant="outline"
                  className="flex w-full md:w-auto items-center space-x-2"
                >
                  <FaGoogle className="h-5 w-5" />
                  <span>Google</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex w-full md:w-auto items-center space-x-2"
                >
                  <FaFacebook className="h-5 w-5" />
                  <span>Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  className="flex w-full md:w-auto items-center space-x-2"
                >
                  <FaTwitter className="h-5 w-5" />
                  <span>X.com</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm w-full text-center">
            Vous n'avez pas de compte ?{' '}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Inscrivez-vous
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Form1;
