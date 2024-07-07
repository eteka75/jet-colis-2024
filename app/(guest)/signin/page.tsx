import React from 'react';
import { Metadata } from 'next';
import LightLayout from '@/components/layouts/LightLayout';
import Login from './Form/Login';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
//const Header = lazy(() => import('@/component/ui/common/Header'));

const SignInPage = () => {
  return (
    <LightLayout>
      <main className="md:py-12 py-8 md:min-h bg-accent">
        <div className="container md:min-h flex justify-center items-center">
          <Card className="w-[23rem] max-w-md">
            <div>
              <CardHeader>
                <CardTitle className="text-2xl">Connexion</CardTitle>
                <CardDescription>
                  {/* Renseignez vos identifiants pour vous connecter. */}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Login />
              </CardContent>
            </div>
          </Card>
        </div>
      </main>
    </LightLayout>
  );
};

export default SignInPage;

export const metadata: Metadata = {
  title: 'Se connecter',
};
