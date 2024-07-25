import DashboardLayout from '@/components/layouts/DashboardLayout';
import React from 'react';
import { Button } from 'react-day-picker';

const Page = () => {
  return (
    <DashboardLayout page="moyen-transport">
      <div>
        <div className="md:flex md:justify-between items-center md:pe-4">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">
              Moyen de transport
            </h1>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;
