import DefaultLayout from '@/components/layouts/DefaultLayout';
import HomeLayout from '@/components/layouts/HomeLayout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { FaCarSide, FaEmber } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';
import { MdErrorOutline } from 'react-icons/md';

const NotFound = () => {
  return (
    <DefaultLayout>
      <div className="container min-h-screen-minus-menu py-40 justify-center items-center flex p-10 mx-auto">
        <div className="text-center">
          <MdErrorOutline className="text-5xl mx-auto text-slate-400" />
          <h1 className="text-2xl font-bold">404, Page non trouvé !</h1>
          <p className="text-md mb-6">
            La page que vous recherchez n'existe pas ou a été déplcée
          </p>
          <Link href="/">
            <Button>
              <IoIosArrowBack />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NotFound;
