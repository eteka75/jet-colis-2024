import { Metadata } from 'next';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { auth } from '@/auth';
import { UseProfile } from './ui/UserProfile';
import TopPageText from '@/components/common/ui/TopPageText';
import TopPageLanding from '@/components/common/ui/TopPageLanding';

// Styles pour les liens de la sidebar
const Profil = async () => {
  const session = await auth();
  const user = session?.user || null;
  return (
    <DefaultLayout type="mini">
      <div className="container-mini">
        <TopPageText>Profil</TopPageText>

        <UseProfile user={user} />
      </div>
    </DefaultLayout>
  );
};

export default Profil;

export const metadata: Metadata = {
  title: 'Profil',
};
