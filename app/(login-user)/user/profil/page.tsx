import { Metadata } from 'next';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { auth } from '@/auth';
import { UseProfile } from './ui/UserProfile';
import NavProfil from './ui/NavProfil';

const Profil = async () => {
  const session = await auth();
  const user = session?.user || null;
  return (
    <DefaultLayout type="mini_">
      <NavProfil actif="profil" />
      <div className="container">
        <UseProfile user={user} />
      </div>
    </DefaultLayout>
  );
};

export default Profil;

export const metadata: Metadata = {
  title: 'Profil',
};
