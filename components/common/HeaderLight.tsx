import React from 'react';
import Image from 'next/image';

import logoLight from '@/public/assets/images/logo-v0.png';
import logoDark from '@/public/assets/images/logo-v1.png';
import Link from 'next/link';

const HeaderLight = () => {
  return (
    <div className="md:pt-32 pt-8 md:pb-8">
      <div className="max-w-lg mx-auto">
        <Link href={'/'}>
          {' '}
          <Image
            src={logoLight}
            alt="Colistify"
            className="h-6 lg:h-6 xl:h-8 w-auto mx-auto  dark:hidden"
          />
          <Image
            src={logoDark}
            alt="Colistify"
            className="h-6 lg:h-8 xl:h-9 w-auto mx-auto hidden dark:flex"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeaderLight;
