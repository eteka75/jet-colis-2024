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
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// Styles pour les liens de la sidebar
const linkStyles =
  'flex items-center gap-2 text-neutral-500 px-4 py-2 rounded-md hover:bg-accent dark:hover:text-white hover:no-underline';

const Sidebar = () => (
  <aside className="py-8 md:pe-4 h-screen max-w-64 bg-accent_ w-full overflow-y-auto">
    <ProfileUser />
    <ul className="space-y-1 ">
      <li>
        <Link href="link" className={linkStyles}>
          <User className="w-5 h-5" /> Profile
        </Link>
      </li>
      <li>
        <Link href="link" className={linkStyles}>
          <Settings className="w-5 h-5" /> Account Settings
        </Link>
      </li>
      <li>
        <Link href="link" className={linkStyles}>
          <Lock className="w-5 h-5" /> Security
        </Link>
      </li>
      <li>
        <Link href="link" className={linkStyles}>
          <Bell className="w-5 h-5" /> Notifications
        </Link>
      </li>
      <li>
        <Link href="link" className={linkStyles}>
          <Shield className="w-5 h-5" /> Privacy
        </Link>
      </li>
    </ul>
  </aside>
);

const ProfileForm = () => (
  <Card className="max-w-[400px] shadow-none border-0">
    <CardHeader>
      <CardTitle>Mon profil</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <form className=" mx-auto tex-sm space-y-2">
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
          <Select>
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
        <div>
          <Button type="submit">Save Changes</Button>
        </div>
      </form>
    </CardContent>
  </Card>
);

const MainContent = () => (
  <main className="h-screen  w-full md:w-10/12 overflow-y-auto p-8">
    <div className="flex_justify-center_max-w-screen-md_items-center">
      <ProfileForm />
    </div>
  </main>
);

const ProfileUser = () => (
  <div className=" text-sm p-2 px-4 hidden">
    <h2 className="font-bold">User name</h2>
    <p className="opacity-80">Account Settings</p>
  </div>
);

const Profil = () => {
  return (
    <DefaultLayout>
      <div className="border-t">
        <div className="container mx-auto flex flex-col md:flex-row gap-4">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Profil;

export const metadata: Metadata = {
  title: 'Profil',
};
