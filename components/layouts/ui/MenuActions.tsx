import React from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
const MenuActions = () => {
  return (
    <div className="hidden md:flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size={'sm'}
            variant="outline"
            className="flex h-8 items-center gap-2"
          >
            + Créer <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href="/articles">Articles</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/trajet">Trajet</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/categories">Catégories</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/utilisateurs">Utilisateurs</Link>
          </DropdownMenuItem>
          {/* Ajoutez d'autres éléments de menu ici */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MenuActions;
