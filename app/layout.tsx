import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import '@/styles/globals.css';
import { Inter as FontSans, Figtree } from 'next/font/google';
import { cn } from '@/lib/utils';
import ThemeProvider from '@/src/themes/ThemeProvider';
import clsx from 'clsx';

import { SessionProvider } from 'next-auth/react';
// import { LanguageProvider } from '@/context/LanguageContext';

import type { Metadata } from 'next';
import { AppProps } from 'next/app';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
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
          figtree.className
        )}
        //style={{ fontFamily: 'Inter, var(--font-sans)' }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <SessionProvider>
              <main>{children}</main>
            </SessionProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
const LetSessionProvider = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

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
