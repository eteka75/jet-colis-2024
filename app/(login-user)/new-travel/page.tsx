import { auth } from '@/auth';
import SlimLayout from '@/components/layouts/SlimLayout';
import { Card, CardHeader } from '@/components/ui/card';
import { authMiddleware } from '@/src/lib/actions';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async () => {
  // const user = authMiddleware();
  return (
    <SlimLayout>
      <div className="container">
        <Card>
          <CardHeader>Nouveau trajet </CardHeader>
          <CardHeader>Nouveau trajet </CardHeader>
          <CardHeader>Nouveau trajet </CardHeader>
          <CardHeader>Nouveau trajet </CardHeader>
        </Card>
      </div>
    </SlimLayout>
  );
};

export default Page;
