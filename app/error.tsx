'use client';
import React from 'react';
import DefaultLayout from '@/components/layouts/DefaultLayout';

const Error = ({ error }: { error: Error }) => {
  return (
    <DefaultLayout>
      <div className="container py-8">
        <div className="h-screen justify-center items-center">
          <h1 className="text-lg font-bold">Something went wrong!</h1>
          <p className="opacity-80">{error.message}</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Error;
