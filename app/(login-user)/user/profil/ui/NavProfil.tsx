import { userProfileLinks } from '@/constants/nav';
import { OnStringType } from '@/constants/types';
import { cn } from '@/src/lib/utils';
import Link from 'next/link';
import React from 'react';

const NavProfil: React.FC<OnStringType> = ({ actif }) => {
  return (
    <div className="container">
      <nav className="flex gap-2 pt-4 text-md">
        {userProfileLinks.map((link) => (
          <Link
            key={link.href}
            className={cn(
              'me-4 opacity-70 font-normal border-b-2 pb-1 border-b-background hover:text-primary',
              actif == link.name
                ? 'font-medium border-b-primary hover:text-foreground'
                : ''
            )}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavProfil;
