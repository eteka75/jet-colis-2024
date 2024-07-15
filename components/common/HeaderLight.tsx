import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import { User2, UserPlus } from 'lucide-react';

interface HeaderProps {
  left?: ReactNode;
  center?: ReactNode;
  right?: ReactNode;
}

const HeaderLight: React.FC<HeaderProps> = ({ left, center, right }) => {
  return (
    <div className=" p-4 shadow-sm mb-8">
      <div className="px-4  mx-auto">
        <div className="flex justify-between items-center">
          <div className="md:min-w-64">
            {left || (
              <Link href={'/'}>
                <FaArrowLeft className="h-6 w-6 hover:text-primary" />
              </Link>
            )}
          </div>
          <div className="flex-grow text-center">
            {center || (
              <Link href={'/'}>
                <>
                  <Image
                    src={logoLight}
                    alt="Colistify"
                    className="h-6 xl:h-8 w-auto mx-auto dark:hidden"
                  />
                  <Image
                    src={logoDark}
                    alt="Colistify"
                    className="h-6 lg:h-8 xl:h-9 w-auto mx-auto hidden dark:flex"
                  />
                </>
              </Link>
            )}
          </div>
          <div className="text-sm  md:min-w-64 flex justify-end text-end hover:text-primary">
            {right || (
              <Link href={'signup'}>
                <span className="flex lg:hidden">
                  <UserPlus className="h-6 w-6" />
                </span>
                <span className="hidden lg:flex">Inscription</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLight;
