import { Metadata } from 'next';
import Register from '../signin/Form/Register';
import LightLayout from '@/components/layouts/LightLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import HeaderLight from '@/components/common/HeaderLight';
import Link from 'next/link';
import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import { User2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/src/lib/utils';
import { buttonVariants } from '@/components/ui/button';

const dash = process.env.NEXT_DASHBOARD_URL || 'dashbaord';

const SignUp = async () => {
  const session = await auth();

  if (session && session?.user) {
    redirect(dash);
  }
  return (
    <LightLayout>
      <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          href="/signin"
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'absolute right-4 top-4 hidden md:right-8 md:top-8'
          )}
        >
          Login
        </Link>
        <div className="relative hidden h-full flex-col bg-muted px-10 py-4 lg:flex dark:border-r">
          <div className="absolute inset-0 bg-accente" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <div className="flex items-center">
              <Link href={'/'} className="hidden lg:flex  m-0">
                <>
                  <Image
                    src={logoLight}
                    alt="Colistify"
                    className="h-4 lg:h-6 xl:h-7 w-auto dark:hidden"
                  />
                  <Image
                    src={logoDark}
                    alt="Colistify"
                    className="h-5 lg:h-7 xl:h-7 w-auto hidden dark:flex"
                  />
                </>
              </Link>
              {/* <MobileTopMenu /> */}
            </div>{' '}
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Envoyez et recevez vos colis à travers le monde.&rdquo;
              </p>
              <footer className="text-sm">Colifly</footer>
            </blockquote>
          </div>
        </div>
        <div className="flex h-full items-center p-4 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="mx-auto text-center">
              <Link href={'/'} className="flex  sm:hidden m-auto">
                <>
                  <Image
                    src={logoLight}
                    alt="Colistify"
                    className="h-5 lg:h-6 xl:h-7 w-auto dark:hidden"
                  />
                  <Image
                    src={logoDark}
                    alt="Colistify"
                    className="h-6 lg:h-7 xl:h-7 w-auto hidden dark:flex"
                  />
                </>
              </Link>
            </div>
            <Register />
            <p className="px-8 text-center text-sm text-muted-foreground">
              En cliquant sur Continuer, vous acceptez nos{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                conditions d'utilisation
              </Link>{' '}
              et{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                notre politique de confidentialité.
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </LightLayout>
  );
};

export default SignUp;

export const metadata: Metadata = {
  title: 'Créer un compte',
};
