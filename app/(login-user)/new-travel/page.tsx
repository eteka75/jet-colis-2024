import SlimLayout from '@/components/layouts/SlimLayout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Upload } from 'lucide-react';
import React from 'react';
import NavBreadcrumb from './ui/NavBreadcrumb';
import Link from 'next/link';
import Step1 from '@/components/forms/AddTrajet/Step1';

const Page = async () => {
  // const user = authMiddleware();
  const lists = [
    { text: 'Accueil', href: '/' },
    { text: 'Trajets', href: '/trajets' },
    { text: 'Nouvelle offre' },
  ];
  return (
    <SlimLayout>
      <div className=" lg:h-min pb-8">
        <NavBreadcrumb items={lists} />
        <div className="container">
          <div className="lg:w-9/12 max-w-screen-md">
            <Card>
              <CardContent className="p-4 lg:p-6">
                <Step1 />
              </CardContent>
            </Card>
          </div>
          <div className="lg:w-3/12 py-4">
            <h1>Prévisualisation</h1>
          </div>
        </div>
      </div>
    </SlimLayout>
  );
};

export default Page;
