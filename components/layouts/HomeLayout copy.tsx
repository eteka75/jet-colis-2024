import React, { ReactNode } from 'react';
// import Header from '../common/Header';
import Footer from '../common/Footer';
import SubNav from '../common/Home/SubNav';

import { Suspense, lazy } from 'react';
import MiniFooter from '../common/Home/MiniFooter';
import { MdHorizontalSplit } from 'react-icons/md';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import MiniProfileCard from '@/app/(login-user)/user/profil/form/MiniProfileCard';
import ProfileCardContent from '@/app/(login-user)/user/profil/form/ProfileCardContent';
import { BiMessageSquare } from 'react-icons/bi';
import { Settings } from 'lucide-react';
import Login from '@/app/(guest)/signin/Form/Login';

// Charger le composant client de manière asynchrone
const Header = lazy(() => import('../common/Header'));
const MPPPPHomeLayoute = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className="md:fixed   top-0 left-0 right-0 z-50 border- _border-accent ">
        {/* <Suspense fallback={<div className="text-lg">Loading...</div>}> */}
        <Header type="moyen" />
        {/* <div className="md:-mt-1 -mt-0.5">
          <SubNav />
        </div> */}
        {/* </Suspense> */}
      </header>
      <div className="h-6 md:h-20 " />
      <div className="md:min-h  mt-0 ">
        <div className="container">
          <div className="md:grid md:grid-cols-3 lg:grid-cols-4 w-full h-full md:gap-4 items-start">
            <div className="hidden lg:flex relative _lg:w-1/4 _lg:min-w-[100px] _lg:max-w-[400px] ">
              <div className="space-y-4 pb-4 ">
                <MiniProfileCard url="/user/settings">
                  <ProfileCardContent
                    icon={<Settings className="h-8 w-8 opacity-40 mb-1" />}
                    title="Paramètres du compte"
                    description="Gérer les paramètres de votre compte"
                  />
                </MiniProfileCard>
                <MiniProfileCard url="/user/messages">
                  <ProfileCardContent
                    icon={
                      <BiMessageSquare className="h-8 w-8 opacity-40 mb-1" />
                    }
                    title="Messagerie"
                    description="Consulter vos messages reçus et envoyés"
                  />
                </MiniProfileCard>
              </div>
            </div>
            <div className="col-span-2">{children}</div>
            <div className="_lg:w-1/4 _lg:min-w-[280px] _lg:max-w-[400px] justify-start ">
              <Login />
            </div>
          </div>
        </div>
      </div>
      <MiniFooter />
    </>
  );
};
export default MPPPPHomeLayoute;
