import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
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
import { FaGithub } from 'react-icons/fa6';

const HugeWhy = () => {
  return (
    <div className="light-bg  dark:bg-accent">
      <div className="container">
        <PageHeader>
          <Announcement />

          <PageHeaderHeading className="text-2xl max-w-screen-sm my-4 ">
            Pour faciliter l'envoie de vos colis entre l'Afrique et l'Europe.
          </PageHeaderHeading>
          <PageHeaderDescription>
            Facilitez vos envois grâce à notre réseau unique reliant les deux
            continents par avion et autres moyens efficaces...
          </PageHeaderDescription>
          <PageActions>
            <Link href="/getstarted" className={cn(buttonVariants())}>
              En savoir plus ===
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={'/register'}
              className={cn(buttonVariants({ variant: 'outline' }))}
            >
              Créer un compte
            </Link>
          </PageActions>
        </PageHeader>
      </div>
    </div>
  );
};

export default HugeWhy;
