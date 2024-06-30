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
import { Switch } from '@/components/ui/switch';
import OAuthButtons from '@/components/common/ui/OAuthButtons';
import LineSeparator from '@/components/common/ui/LineSeparator';

const Login = () => {
  return (
    <div className="md:py-12 pb-8 bg-accent ">
      <div className="container">
        <Card className="md:py-4 mx-auto max-w-sm">
          <div>
            <CardHeader>
              <CardTitle className="text-2xl">Connexion</CardTitle>
              <CardDescription>
                Renseignez vos identifiants pour vous connecter.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex items-center space-x-2">
                    <Switch id="remember-me" />
                    <Label htmlFor="remember-me" className="text-xs">
                      {' '}
                      Se souvenir de moi
                    </Label>
                  </div>
                </div>
                <Link
                  href="/forgot-password"
                  className="text-primary  text-xs hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <Button className="w-full mt-2">Se connecter</Button>
            </CardContent>
          </div>
          <div>
            <CardContent>
              <LineSeparator className="text-xs uppercase">
                Ou se connecter avec
              </LineSeparator>
              <div className="py-4">
                <OAuthButtons />
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <p className="text-center w-full text-sm">
              Vous n'avez pas de compte ?{' '}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Inscrivez-vous
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
