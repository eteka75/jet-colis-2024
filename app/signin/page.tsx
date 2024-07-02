import React from 'react';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import LightLayout from '@/components/layouts/LightLayout';
import Login from './Form/Login';
//const Header = lazy(() => import('@/component/ui/common/Header'));

const SignInPage = () => {
  const t = useTranslations('Signin');

  return (
    <LightLayout>
      <main>
        <Login />
      </main>
    </LightLayout>
  );
};

export default SignInPage;

export const metadata: Metadata = {
  title: 'Se connecter',
};
