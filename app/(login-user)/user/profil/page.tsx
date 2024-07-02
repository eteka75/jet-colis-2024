import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Button } from '@/components/ui/button';
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
import { Metadata } from 'next';
import React from 'react';
import { User, Settings, Lock, Bell, Shield } from 'lucide-react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import AccountLayout from '@/components/layouts/AccountLayout';

// Styles pour les liens de la sidebar
const Profil = () => {
  return (
    <AccountLayout>
      <ProfileForm />
    </AccountLayout>
  );
};

export default Profil;

export const metadata: Metadata = {
  title: 'Profil',
};
const ProfileForm = () => (
  <form className=" mx-auto tex-sm space-y-2">
    <Card className="md:max-w-[800px] md:shadow-none md:border-0  mb-8 ">
      <CardHeader>
        <CardTitle>Mon profil</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input className="py-1" id="name" placeholder="Enter your name" />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter your username" />
        </div>
        <div>
          <Label htmlFor="bio">Bio</Label>
          <Textarea id="bio" placeholder="Tell us about yourself" />
        </div>
        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select name="gender">
            <SelectTrigger className="w-[180px]">
              <SelectValue>Select your gender</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="birthdate">Birthdate</Label>
          <Input id="birthdate" type="date" />
        </div>

        <div className="py-8">
          <Button type="submit">Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  </form>
);
