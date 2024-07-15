// app/signin/page.tsx
import React from 'react';
import SignInPage from '../signin/page';
import { Metadata } from 'next';
import HeaderLight from '@/components/common/HeaderLight';

const Login = () => {
  return (
    <>
      <SignInPage />
    </>
  );
};

export default Login;

export const metadata: Metadata = {
  title: 'Se connecter',
};
