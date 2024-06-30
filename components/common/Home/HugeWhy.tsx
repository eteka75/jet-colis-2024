import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import React from 'react';
import TopBrand from './TopBrand';

const HugeWhy = () => {
  return (
    <div className="light-bg dark:bg-secondary py-8 md:py-10">
      <div className="container">
        <div className="md:max-w-screen-lg mx-auto text-center">
          <Badge className=" md:py-1.5 md:px-8 bg-background text-inherit shadow-sm hover:bg-background">
            Des milliers d'offres d'offres chaque jours{' '}
          </Badge>
          <h1 className="text-2xl md:text-[2rem] lg:text-[3rem] xl:text-[4rem]  font-serif liner-heading my-6  md:my-8 mx-auto">
            Pour faciliter l'envoie de vos colis entre l'Afrique et l'Europe.
          </h1>

          <p className="text-sm md:text-md lg:text-lg xl:text-lx font-normal text-slate-700  mt-2 md:mt-6 w-10/12 md:max-w-xl mx-auto">
            Facilitez vos envois grâce à notre réseau unique reliant les deux
            continents par avion et autres moyens efficaces.
          </p>

          <div className="py-4 md:py-6">
            <Button className="rounded-full lg:py-6 lg:px-6">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
      <TopBrand />
    </div>
  );
};

export default HugeWhy;
