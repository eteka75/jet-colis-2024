import { Metadata } from 'next';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { auth } from '@/auth';
import { UseProfile } from './ui/UserProfile';
import TopPageText from '@/components/common/ui/TopPageText';
import TopPageLanding from '@/components/common/ui/TopPageLanding';
import Link from 'next/link';

const linkStyle = 'px-2 opacity-70 font-medium';
// Styles pour les liens de la sidebar
const Profil = async () => {
  const session = await auth();
  const user = session?.user || null;
  return (
    <DefaultLayout type="mini">
      <div className="container-mini">
        <nav className="flex gap-2 pt-4 text-md">
          <Link className={linkStyle} href="/user/profil">
            Profil
          </Link>
          <Link className={linkStyle} href="/user/offres">
            Mes offres
          </Link>
          <Link className={linkStyle} href="/user/received">
            Colis reçus
          </Link>
          <Link className={linkStyle} href="/user/favorites">
            Favoris
          </Link>
          <Link className={linkStyle} href="/user/messages">
            Messages
          </Link>

          <Link className={linkStyle} href="/user/settings">
            Préférences
          </Link>
        </nav>
        <UseProfile user={user} />
      </div>
    </DefaultLayout>
  );
};

export default Profil;

export const metadata: Metadata = {
  title: 'Profil',
};
