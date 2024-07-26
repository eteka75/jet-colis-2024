import { Metadata } from 'next';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { auth } from '@/auth';
import NavProfil from '../user/profil/ui/NavProfil';
import { UseProfile } from '../user/profil/ui/UserProfile';

const Page = async () => {
  const session = await auth();
  const user = session?.user || null;
  return (
    <DefaultLayout>
      <NavProfil actif="messages" />
      <div className="container">
        <UseProfile user={user} />
      </div>
    </DefaultLayout>
  );
};

export default Page;

export const metadata: Metadata = {
  title: 'Messages',
};
