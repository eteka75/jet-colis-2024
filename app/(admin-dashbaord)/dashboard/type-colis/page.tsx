import DashboardHeader from '@/components/common/Dashboard/DashboardHeader';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';
import { Button } from 'react-day-picker';

const Page = () => {
  return (
    <DashboardLayout page="type-colis">
      <DashboardHeader>Type de colis</DashboardHeader>
      <Card>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A
          perspiciatis dicta labore unde dolor repellat maxime aspernatur
          dolorem voluptatibus illo itaque explicabo tempore excepturi, sequi
          temporibus pariatur ipsum eveniet asperiores!
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Page;
