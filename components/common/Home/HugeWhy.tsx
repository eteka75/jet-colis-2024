<<<<<<< HEAD
import { buttonVariants } from '@/components/ui/button';
=======
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
import React from 'react';
import TopBrand from './TopBrand';
import {
  Announcement,
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '../ui/page-header';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const HugeWhy = () => {
  return (
    // <div className=" dark:bg-secondary py-8 md:py-10">
    //   <div className="container">
    //     <div className="md:max-w-screen-lg mx-auto text-center">
    //       <Badge className=" md:py-1.5 md:px-8 bg-background text-inherit shadow-sm hover:bg-background">
    //         Des milliers d'offres d'offres chaque jours{' '}
    //       </Badge>
    //       <h1 className="text-2xl md:text-[2rem] lg:text-[3rem] xl:text-[4rem]  font-serif liner-heading my-6  md:my-8 mx-auto">
    //         Pour faciliter l'envoie de vos colis entre l'Afrique et l'Europe.
    //       </h1>

    //       <p className="text-sm md:text-md lg:text-lg xl:text-lx font-normal text-slate-700  mt-2 md:mt-6 w-10/12 md:max-w-xl mx-auto">
    //         Facilitez vos envois grâce à notre réseau unique reliant les deux
    //         continents par avion et autres moyens efficaces.
    //       </p>

    //       <div className="py-4 md:py-6">
    //         <Button className="rounded-full lg:py-6 lg:px-6">
    //           En savoir plus
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    //   <TopBrand />
    // </div>
    <div className="">
      <div className="container">
        <PageHeader>
          <Announcement />
          <PageHeaderHeading className="text-2xl max-w-screen-lg my-4 ">
            Pour faciliter l'envoie de vos colis entre l'Afrique et l'Europe.
          </PageHeaderHeading>
          <PageHeaderDescription>
            Facilitez vos envois grâce à notre réseau unique reliant les deux
            continents par avion et autres moyens efficaces...
          </PageHeaderDescription>
          <PageActions>
            {/* <Link
              href="/getstarted"
              className={cn(buttonVariants(), 'py-6 rounded-full px-8')}
            >
              En savoir plus
            </Link> */}
            <Link
              target="_blank"
              rel="noreferrer"
              href={'/register'}
              className={cn(buttonVariants(), 'py-6 rounded-full px-8')}
            >
              Créer un compte
            </Link>
          </PageActions>
        </PageHeader>
      </div>
      <TopBrand />
    </div>
  );
};

export default HugeWhy;
