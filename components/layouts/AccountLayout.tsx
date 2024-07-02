import React, { ReactNode } from 'react';
import DefaultLayout from './DefaultLayout';
import Link from 'next/link';
import { Bell, Lock, Settings, Shield, User } from 'lucide-react';
const linkStyles =
<<<<<<< HEAD
  'flex items-center gap-2 text-neutral-500 dark:text-white/80 px-4 py-2 rounded-md hover:bg-accent dark:hover:text-white hover:no-underline';
=======
  'flex items-center gap-2 text-neutral-500 px-4 py-2 rounded-md hover:bg-accent dark:hover:text-white hover:no-underline';
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

const AccountLayout = ({ children }: { children: ReactNode }) => {
  return (
    <DefaultLayout>
      <div className="border-t">
        <div className="container mx-auto flex flex-col md:flex-row gap-4 py-4">
          <AcountSidebar />
          <MainContent>{children}</MainContent>
        </div>
      </div>
    </DefaultLayout>
  );
};
const AcountSidebar = () => (
<<<<<<< HEAD
  <aside className="py-4 md:pe-4 md:max-w-64 bg-accent_ w-full overflow-y-auto">
=======
  <aside className="py-4 md:pe-4 lg:h-screen md:max-w-64 bg-accent_ w-full overflow-y-auto">
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
    <ProfileUser />
    <ul className="space-y-1 ">
      <li>
        <Link href="/user/profil" className={linkStyles}>
          <User className="w-5 h-5" /> Profile
        </Link>
      </li>
      <li>
        <Link href="/user/settings" className={linkStyles}>
          <Settings className="w-5 h-5" /> Account Settings
        </Link>
      </li>
      <li>
        <Link href="/user/security" className={linkStyles}>
          <Lock className="w-5 h-5" /> Security
        </Link>
      </li>
      <li>
        <Link href="/user/notifications" className={linkStyles}>
          <Bell className="w-5 h-5" /> Notifications
        </Link>
      </li>
      <li>
        <Link href="/user/privacy" className={linkStyles}>
          <Shield className="w-5 h-5" /> Privacy
        </Link>
      </li>
    </ul>
  </aside>
);
const MainContent = ({ children }: { children: ReactNode }) => (
<<<<<<< HEAD
  <main className="md:min-h_   w-full md:w-10/12 overflow-y-auto ">
=======
  <main className="md:h-screen   w-full md:w-10/12 overflow-y-auto ">
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
    {children}
  </main>
);
const ProfileUser = () => (
  <div className=" text-sm p-2 px-4 hidden">
    <h2 className="font-bold">User name</h2>
    <p className="opacity-80">Account Settings</p>
  </div>
);
export default AccountLayout;
