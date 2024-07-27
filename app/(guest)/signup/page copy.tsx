import { Metadata } from 'next';
import Register from '../signin/Form/Register';
import LightLayout from '@/components/layouts/LightLayout';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import HeaderLight from '@/components/common/HeaderLight';
import Link from 'next/link';
import { User2 } from 'lucide-react';

const dash = process.env.NEXT_DASHBOARD_URL || 'dashbaord';

const SignUp = async () => {
  const session = await auth();

  if (session && session?.user) {
    redirect(dash);
  }
  return (
    <LightLayout>
      <HeaderLight
        right={
          <Link href={'signin'}>
            <span className="flex lg:hidden">
              <User2 className="h-6 w-6" />
            </span>
            <span className="hidden lg:flex">Se connecter</span>
          </Link>
        }
      />
      <Register />
    </LightLayout>
  );
};

export default SignUp;

export const metadata: Metadata = {
  title: 'Créer un compte',
};
