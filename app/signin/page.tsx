import React from 'react';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import LightLayout from '@/components/layouts/LightLayout';
import Login from './Form/Login';

const SignInPage = () => {
  const t = useTranslations('Signin');

  return (
    <LightLayout>
      <Login />
    </LightLayout>
  );
};

export default SignInPage;

export const metadata: Metadata = {
  title: 'Se connecter',
};
