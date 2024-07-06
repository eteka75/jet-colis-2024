'use client';

import { ReactNode } from 'react';
// import { IntlProvider } from 'react-intl';
import enMessages from '@/public/locales/en.json';
import frMessages from '@/public/locales/fr.json';

interface TranslationProviderProps {
  locale: string;
  children: ReactNode;
}

const messages: Record<string, Record<string, string>> = {
  en: enMessages,
  fr: frMessages,
};

const TranslationProvider = ({
  locale,
  children,
}: TranslationProviderProps) => {
  return (
    <>{children}</>
    // <IntlProvider locale={locale} messages={messages[locale]}>
    //   {children}
    // </IntlProvider>
  );
};

export default TranslationProvider;
