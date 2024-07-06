import DefaultLayout from '@/components/layouts/DefaultLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { SelectItem } from '@radix-ui/react-select';
import { Metadata } from 'next';
import React from 'react';

const Sidebar = () => (
  <aside className="border-e py-8 md:pe-4 h-screen md:w-1/4 w-full overflow-y-auto">
    <ul className="space-y-1">
      <li>
        <Button variant="link">Profile</Button>
      </li>
      <li>
        <Button variant="link">Account Settings</Button>
      </li>
      <li>
        <Button variant="link">Security</Button>
      </li>
      <li>
        <Button variant="link">Notifications</Button>
      </li>
      <li>
        <Button variant="link">Privacy</Button>
      </li>
    </ul>
  </aside>
);

const ProfileForm = () => (
  <form className="space-y-4">
    <div>
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
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
        <SelectItem value="">Select your gender</SelectItem>
        <SelectItem value="male">Male</SelectItem>
        <SelectItem value="female">Female</SelectItem>
        <SelectItem value="other">Other</SelectItem>
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
);

const MainContent = () => (
  <main className="h-screen w-full md:w-3/4 overflow-y-auto p-8">
    <ProfileForm />
  </main>
);

const Profil = () => {
  return (
    <DefaultLayout>
      <div className="container mx-auto flex flex-col md:flex-row gap-4">
        <Sidebar />
        <MainContent />
      </div>
    </DefaultLayout>
  );
};

export default Profil;

export const metadata: Metadata = {
  title: 'Profil',
};
