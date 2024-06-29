import React from 'react';
import { useTranslations } from 'next-intl';
import Form1 from './Form/Form1';
import Form2 from './Form/Form2';
import { Metadata } from 'next';

const SignInPage = () => {
  const t = useTranslations('Signin');

  return <Form2 />;
};

export default SignInPage;

export const metadata: Metadata = {
  title: 'Se connecter',
};
