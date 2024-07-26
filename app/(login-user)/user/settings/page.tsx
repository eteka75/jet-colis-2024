import { Metadata } from 'next';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { auth } from '@/auth';
import { UseProfile } from '../profil/ui/UserProfile';
import NavProfil from '../profil/ui/NavProfil';

const Page = async () => {
  const session = await auth();
  const user = session?.user || null;
  return (
    <DefaultLayout>
      <NavProfil actif="preferences" />
      <div className="container">{/* <UseProfile user={user} /> */}</div>
    </DefaultLayout>
  );
};

export default Page;

export const metadata: Metadata = {
  title: 'Préférences',
};
