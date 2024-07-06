'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { TbMessage } from 'react-icons/tb';
import { useState } from 'react';
import { Separator } from '@/components/ui/separator';
// import { useTranslations } from 'next-intl';
import { LuPackagePlus } from 'react-icons/lu';
const UserNavLinks = () => {
  const [Authenticated] = useState(true);
  //const t = useTranslations('Menu');

  return (
    <div className="flex gap-2">
      {Authenticated ? (
        <>
          <Button size={'sm'} variant="ghost">
            <IoIosNotificationsOutline className="h-6 w-6" />
          </Button>
          <Button size={'sm'} variant="ghost">
            <TbMessage className="h-6 w-6" />
          </Button>
          <Separator orientation="vertical" className="h-5 opacity-45" />
        </>
      ) : (
        <>
          <div className="flex text-sm items-center ">
            <Link href={'/send'} className="hidden md:block">
              <Button
                variant={'ghost'}
                className="flex gap-2 text-emerald-300 rounded-full hover:text-emerald-900 hover:bg-emerald-300 "
              >
                <LuPackagePlus /> {'Proposer un transport'}
              </Button>
            </Link>
            {/* <Link title={'Créer un compte'} href={'signup'}>
              <Button
                variant="ghost"
                size={'sm'}
                className="hover:bg-emerald-300"
              >
                <FaRegUserCircle className="md:hidden h-6 w-6" />{' '}
                <span className="hidden md:flex">{'Créer un compte'}</span>
              </Button>
            </Link> */}

            {/* <Link
              title={'Se connecter'}
              className="text-emerald-300"
              href={'signin'}
            >
              <Button
                variant="ghost"
                size={'sm'}
                className="hover:bg-emerald-300"
              >
                <IoLogInOutline className="md:hidden h-6 w-6" />
                <span className="hidden md:flex">{'Se connecter'}</span>
              </Button> 
            </Link>*/}
          </div>
        </>
      )}
    </div>
  );
};

export default UserNavLinks;
