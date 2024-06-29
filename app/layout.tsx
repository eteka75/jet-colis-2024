import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/src/themes/ThemeProvider';
import clsx from 'clsx';

// import { LanguageProvider } from '@/context/LanguageContext';

import type { Metadata } from 'next';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
        //style={{ fontFamily: 'Inter, var(--font-sans)' }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <main>{children}</main>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: '%s | Colistify',
    default: ' Envoie de colis entre particuliers au kilo et moins chère', // a default is required when creating a template
  },
  applicationName: 'Colistify',
  referrer: 'origin-when-cross-origin',
  keywords: ['Colistify', 'Colis', 'transfert', 'particuliers'],
  // authors: [{ name: 'Wilfried ETEKA', url: 'https://wes.odacesoft.com' }],
  creator: 'Wilfried ETEKA',
  publisher: 'Wilfried ETEKA',
  description:
    "Colistify est une plateforme d'envoiie de colis ou de couriers entre particuliers à travers le monde",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
