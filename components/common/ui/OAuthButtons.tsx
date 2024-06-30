'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa6';

const OAuthButtons = () => {
  const OAuthSignIn = (provider: string) => {
    signIn(provider);
  };
  return (
    <div className="text-center ">
      <div className="flex flex-col space-y-2">
        <button
          onClick={() => OAuthSignIn('google')}
          //variant="outline"
          className="flex w-full justify-center text-center py-3.5 bg-gray-800 dark:bg-gray-900 text-white rounded-full md:w-auto items-center space-x-2"
        >
          <FaGoogle className="h-5 w-5" />
          <span>Google</span>
        </button>
        <Button
          onClick={() => OAuthSignIn('github')}
          variant="outline"
          className="flex py-6 w-full rounded-full md:w-auto items-center space-x-2"
        >
          <FaFacebook className="h-5 w-5" />
          <span>Facebook</span>
        </Button>
      </div>
    </div>
  );
};

export default OAuthButtons;
