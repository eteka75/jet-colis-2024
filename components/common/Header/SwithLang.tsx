'use client';
import { Button } from '@/components/ui/button';
import React from 'react';

const SwithLang = () => {
  const locale = 'fr';

  const handleChangeLanguage = () => {
    const newLocale = locale === 'fr' ? 'en' : 'fr';
    //locale = newLocale;
  };
  return (
    <div>
      {/* <Button
        onClick={handleChangeLanguage}
        className="text-xs hidden md:flex w-9 h-9 rounded-full"
        variant={'ghost'}
        size={'sm'}
      >
        {locale === 'fr' ? 'EN' : 'FR'}
      </Button> */}
    </div>
  );
};

export default SwithLang;
