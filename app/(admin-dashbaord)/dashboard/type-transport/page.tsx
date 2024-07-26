import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import React from 'react';
// Import correct de Button (si vous avez un composant Button personnalisé)

const Page = () => {
  return (
    <DashboardLayout page="messages">
      <div>
        <div className="md:flex md:justify-between items-center md:pe-4">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">
              Type de trajet
            </h1>
          </div>
        </div>

        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              Vous n'avez aucun produit
            </h3>
            <p className="text-sm text-muted-foreground">
              Vous pouvez commencer à vendre dès que vous ajoutez un produit.
            </p>
            <Button className="mt-4">Ajouter un Produit</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;
