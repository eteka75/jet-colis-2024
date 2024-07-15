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
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeaderLight from '@/components/common/HeaderLight';

const dash = process.env.NEXT_DASHBOARD_URL || 'dashbaord';

const SignInPage = async () => {
  const session = await auth();
  // const router = useRouter();

  if (session && session?.user) {
    redirect(dash);
  }
  return (
    <LightLayout>
      <HeaderLight />
      <main className="bg-accente py-4">
        <div className="container  pb-32">
          <Card className="mx-auto max-w-sm">
            <div>
              <CardHeader>
                <CardTitle className="text-2xl">Connexion</CardTitle>
                <CardDescription>
                  Renseignez vos identifiants pour vous connecter.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Login />
              </CardContent>
            </div>
          </Card>
          <div className="w-[23rem] max-w-full mx-auto pb-4 flex flex-auto gap-3">
            {/* <div className="text-center mt-6 w-full text-sm hover:underline">
              <Link href="/signup">Nouveau?, je m'inscris</Link>
            </div> */}
            <div className="text-center mt-6 w-full text-sm">
              <Link
                href="/forgot-password"
                className=" text-xs hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>
          </div>
        </div>
      </main>
    </LightLayout>
  );
};

export default SignInPage;

export const metadata: Metadata = {
  title: 'Se connecter',
};
