'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { User } from '@prisma/client';
import Image from 'next/image';
import { siteConfig } from '@/src/config/website';
import Link from 'next/link';
import {
  BadgeCheck,
  CircleHelp,
  DollarSignIcon,
  Edit,
  Link2,
  PackagePlus,
  Settings,
  Star,
} from 'lucide-react';
import { BiMessageSquare } from 'react-icons/bi';
import { handleSignOut } from '@/src/lib/actions';
import MiniProfileCard from '../form/MiniProfileCard';
import ProfileCardContent from '../form/ProfileCardContent';
import LogoutButton from '../form/LogoutButton';

export const UseProfile = ({ user }: { user?: User }) => {
  const formattedDate = user?.createdAt?.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSignOut();
  };
  return (
    <div className=" md:py-4 pb-4 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className=" md:col-span-2  bg-background rounded-md shadow-sm p-4 md:p-6 border">
          <figure className="relative flex flex-col ">
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center">
              <figcaption className="md:flex md:items-center md:space-x-2">
                <div className=" w-full md:w-auto">
                  {user?.image ? (
                    <Image
                      src={user?.image}
                      height={12}
                      width={12}
                      alt={user?.name ?? 'profile'}
                      className="flex-none mx-auto w-20 h-20 border-2 border-white/80 rounded-full  object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Image
                      src={siteConfig.defaultProfileImg}
                      height={12}
                      width={12}
                      alt={user?.name ?? 'profile'}
                      className="flex-none mx-auto w-20 h-20 border-2 border-white/80 rounded-full  object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
                <div className="md:flex md:flex-auto md:w-auto">
                  <div className="text-base text-slate-900 font-semibold dark:text-slate-200">
                    {user?.name}
                  </div>
                  {user?.profileId && (
                    <div className="opacity-70 text-sm">@{user?.profileId}</div>
                  )}
                </div>
              </figcaption>
              <div className=" px-2 flex flex-col md:items-end items-center ">
                <Link
                  href={`/profil-${user?.profileId}`}
                  className="font-semibold text-sm "
                >
                  <Button variant={'link'} className="px-0 gap-2">
                    <Link2 />
                    Voir mon profile public
                  </Button>
                </Link>
                <Link
                  href={'user/profil/edit'}
                  className="flex gap-1 mt-2 text-xs"
                >
                  <Edit className="h-3 w-3" />
                  Modifier{' '}
                </Link>
              </div>
            </div>
          </figure>
        </div>
        <div className="hover:shadow-lg bg-background shadow-sm rounded-lg p-4  border">
          <Link href={'/user/getpayed'}>
            <h1 className="font-bold"> Porte monnaie</h1>
            <h2 className="text-balance font-black mt-2 opacity-40 text-3xl xl:text-4xl">
              0 <span>$</span>
            </h2>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
        <MiniProfileCard url="/user/offres">
          <ProfileCardContent
            icon={<PackagePlus className="h-8 w-8 opacity-40 mb-1" />}
            title="Mes offres de livraison"
            description="Gérer vos offres de livraison de colis"
          />
        </MiniProfileCard>
        <MiniProfileCard url="/user/colis-recus">
          <ProfileCardContent
            icon={<BadgeCheck className="h-8 w-8 opacity-40 mb-1" />}
            title="Colis reçus"
            description="Gérer vos colis reçus"
          />
        </MiniProfileCard>
        <MiniProfileCard url="/user/transactions">
          <ProfileCardContent
            icon={<DollarSignIcon className="h-8 w-8 opacity-40 mb-1" />}
            title="Transactions"
            description="Gérer vos transactions"
          />
        </MiniProfileCard>
        <MiniProfileCard url="/user/settings">
          <ProfileCardContent
            icon={<Settings className="h-8 w-8 opacity-40 mb-1" />}
            title="Paramètres du compte"
            description="Gérer les paramètres de votre compte"
          />
        </MiniProfileCard>
        <MiniProfileCard url="/user/messages">
          <ProfileCardContent
            icon={<BiMessageSquare className="h-8 w-8 opacity-40 mb-1" />}
            title="Messagerie"
            description="Consulter vos messages reçus et envoyés"
          />
        </MiniProfileCard>
        <MiniProfileCard url="/user/favoris">
          <ProfileCardContent
            icon={<Star className="h-8 w-8 opacity-40 mb-1" />}
            title="Favoris"
            description="Consulter mes trajets favoris"
          />
        </MiniProfileCard>
        <MiniProfileCard url="/help">
          <ProfileCardContent
            icon={<CircleHelp className="h-8 w-8 opacity-40 mb-1" />}
            title="Aide"
            description="Consulter le centre d'aide"
          />
        </MiniProfileCard>
      </div>
      <div className="py">
        <LogoutButton />
      </div>
    </div>
  );
};
