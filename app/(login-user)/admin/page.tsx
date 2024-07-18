import DefaultLayout from '@/components/layouts/DefaultLayout';
import LightLayout from '@/components/layouts/LightLayout';
import { Metadata } from 'next';
import React from 'react';

const Admin = () => {
  return (
    <LightLayout>
      <h1>Welcome to my webpage</h1>
    </LightLayout>
  );
};

export default Admin;

export const metadata: Metadata = {
  title: 'Administration',
};
