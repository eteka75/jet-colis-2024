'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import image from '@/public/assets/images/sendcolis_v1.jpg';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50">
      <header className="w-full flex justify-between items-center py-4 px-8 bg-white shadow">
        <h2 className="h5">KIRA</h2>
        <nav className="flex space-x-4">
          <a href="#features" className="text-gray-700">
            Features
          </a>
          <a href="#pricing" className="text-gray-700">
            Pricing
          </a>
          <a href="#release" className="text-gray-700">
            Release
          </a>
          <a href="#about-us" className="text-gray-700">
            About us
          </a>
          <Button onClick={() => '/try-now'} variant="outline">
            Try now
          </Button>
          <Button onClick={() => '/sign-in'} variant="primary">
            Sign in
          </Button>
        </nav>
      </header>
      <main className="flex flex-col items-center py-20">
        <p className="text-4xl font-bold text-center">
          Digitize your business with our solution 🚀
        </p>
        <p className="text-center mt-4">
          Join the list of business owners who have chosen KIRA
        </p>
        <Button variant="primary" className="mt-6">
          Try now for free
        </Button>
        <p className="mt-2 text-center">
          No credit card needed. 30 day trial period
        </p>
        <Card className="mt-10 p-4">
          <CardContent className="flex flex-col items-center">
            <p>Multi user management</p>
            <Image
              src={image}
              alt="Multi user management"
              className="w-full mt-4"
            />
          </CardContent>
        </Card>
        <Card className="mt-10 p-4">
          <CardContent className="flex flex-col items-center">
            <p>Inventory management</p>
            <Image
              src={image}
              alt="Inventory management"
              className="w-full mt-4"
            />
          </CardContent>
        </Card>
        <Card className="mt-10 p-4">
          <CardContent className="flex flex-col items-center">
            <p>Business accounting</p>
            <Image
              src={image}
              alt="Business accounting"
              className="w-full mt-4"
            />
          </CardContent>
        </Card>
        <div className="flex items-center mt-10 space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">BAHA Ephraim</p>
            <p>Shop administrator</p>
          </div>
        </div>
      </main>
      <footer className="w-full py-4 px-8 bg-white shadow mt-10">
        <p className="text-center">© 2023 KIRA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
