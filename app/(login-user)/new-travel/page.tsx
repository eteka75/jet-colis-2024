import SlimLayout from '@/components/layouts/SlimLayout';
import { Card, CardHeader } from '@/components/ui/card';
import React from 'react';

const Page = () => {
  return (
    <SlimLayout>
      <div className="container">
        <Card>
          <CardHeader>Nouveau trajet</CardHeader>
        </Card>
      </div>
    </SlimLayout>
  );
};

export default Page;
