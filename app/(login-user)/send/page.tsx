import { auth } from '@/auth';
import PageLayout from '@/components/layouts/PageLayout';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import React from 'react';

const Send = async () => {
  const session = await auth();
  if (!session?.user) {
    redirect('/login');
  }
  return (
    <PageLayout>
      <div className="container py-4">
        <h1 className="text-3xl font-bold">Colis envoyés</h1>
      </div>
    </PageLayout>
  );
};

export default Send;

export const metadata: Metadata = {
  title: 'Envoie de colis',
};
