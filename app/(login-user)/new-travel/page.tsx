import SlimLayout from '@/components/layouts/SlimLayout';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import NavBreadcrumb from './ui/NavBreadcrumb';
import MultiStepForm from '@/components/forms/AddTrajet/Steps';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const lists = [
  { text: 'Accueil', href: '/' },
  { text: 'Trajets', href: '/trajets' },
  { text: 'Nouvelle offre' },
];

const Page = async () => {
  const session = auth();
  if (!session) {
    redirect('/login');
  }

  return (
    <SlimLayout>
      <div className="lg:h-min pb-8">
        <div className="container">
          <NavBreadcrumb items={lists} />
          <div className="w-full md:flex md:gap-4">
            <div className="md:w-8/12 ">
              <Card>
                <CardContent className="p-4 lg:p-6">
                  <MultiStepForm />
                </CardContent>
              </Card>
            </div>
            <div className="lg:w-3/12 my-4 md:mt-0">
              <h1>Prévisualisation</h1>
            </div>
          </div>
        </div>
      </div>
    </SlimLayout>
  );
};

export default Page;
