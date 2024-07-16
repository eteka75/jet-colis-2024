// 'use client';
import React from 'react';
import Link from 'next/link';
import { Plane, PlusSquareIcon, Search, User2 } from 'lucide-react';
import { CiHeart } from 'react-icons/ci';

const MobileFooter = () => {
  return (
    <div>
      <div className="md:hidden bg-background fixed bottom-0 w-full border-t border-accent flex">
        <Link
          href="/"
          className="flex flex-grow items-center justify-center p-2 text-primary hover:text-primary"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <Plane className="mx-auto" />
            </span>
            <span className="block text-xs font-bold leading-none">
              Trajets
            </span>
          </div>
        </Link>
        <Link
          href="/search"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-primary"
        >
          <div className="text-center">
            <span className="block h-8 text-3xlleading-8">
              <Search className="mx-auto" />
            </span>
            <span className="block text-xs leading-none">Rechercher</span>
          </div>
        </Link>
        <Link
          href="/search"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-primary"
        >
          <div className="text-center">
            <span className="block h-8 text-3xlleading-8">
              <PlusSquareIcon className="mx-auto" />
            </span>
            <span className="block text-xs leading-none">Nouveau</span>
          </div>
        </Link>
        <Link
          href="/user/favoris"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-primary"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl text-center  leading-8">
              <CiHeart className="mx-auto" />
            </span>
            <span className="block text-xs leading-none">Favoris</span>
          </div>
        </Link>
        <Link
          href="/user"
          className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-primary"
        >
          <div className="text-center">
            <span className="block h-8 text-3xl leading-8">
              <User2 className="mx-auto" />
            </span>
            <span className="block text-xs leading-none">Mon compte</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MobileFooter;
