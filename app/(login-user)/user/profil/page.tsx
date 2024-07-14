import { Metadata } from 'next';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { auth } from '@/auth';
import { UseProfile } from './ui/UserProfile';

// Styles pour les liens de la sidebar
const Profil = async () => {
  const session = await auth();
  const user = session?.user || null;
  return (
    <DefaultLayout type="mini">
      <div className="container-mini">
        <UseProfile user={user} />
      </div>
    </DefaultLayout>
  );
};

export default Profil;

export const metadata: Metadata = {
  title: 'Profil',
};
