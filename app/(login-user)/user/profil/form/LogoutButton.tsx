// components/LogoutButton.tsx

'use client';

import { Button } from '@/components/ui/button';
import { IoIosLogOut } from 'react-icons/io';
import { handleSignOut } from '@/src/lib/actions';

const LogoutButton = () => {
  // Fonction pour gérer la soumission du formulaire de déconnexion
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSignOut();
    // Redirection ou mise à jour d'état après la déconnexion, si nécessaire
  };

  return (
    <div className="py-2">
      <form onSubmit={handleFormSubmit}>
        <Button
          variant={'ghost'}
          type="submit"
          className="flex border bg-background shadow-sm items-center py-1"
        >
          <IoIosLogOut className="mr-2 h-4 w-4" /> Déconnexion
        </Button>
      </form>
    </div>
  );
};

export default LogoutButton;
