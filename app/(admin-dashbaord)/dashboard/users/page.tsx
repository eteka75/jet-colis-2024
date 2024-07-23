import DashBreadcrumb from '@/app/(login-user)/new-travel/ui/DashBreadcrumb';
import NavBreadcrumb from '@/app/(login-user)/new-travel/ui/NavBreadcrumb';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Button } from '@/components/ui/button';
import React from 'react';
const lists = [
  { text: 'Utilisateurs', href: '/users' },
  { text: 'Liste des utilisateurs' },
];
const Page = () => {
  return (
    <DashboardLayout page="users">
      <div className="pb-2">
        <DashBreadcrumb items={lists} />
      </div>
      <div>
        <div className="flex items-center justify-between space-y-2 ">
          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
            Utilisateurs
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <Button>Ajouter</Button>
          </div>
        </div>

        <div
          className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
          x-chunk="dashboard-02-chunk-1"
        >
          <div className="flex flex-col items-center gap-1 text-center">
            <h3 className="text-2xl font-bold tracking-tight">
              You have no products
            </h3>
            <p className="text-sm text-muted-foreground">
              You can start selling as soon as you add a product.
            </p>
            <Button className="mt-4">Ajouter Product</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;
