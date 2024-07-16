import { auth } from '@/auth';
import { siteConfig } from '@/src/config/website';
import ThemeProvider from '@/src/themes/ThemeProvider';
import '@/src/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { Figtree, Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import PageLoading from '@/components/common/ui/PageLoading';
import { notFound } from 'next/navigation';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});

const interVar = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
type Props = {
  children: ReactNode;
  params: {
    locale: 'fr' | 'en';
  };
};
const RootLayout: React.FC<Props> = async ({ children, params }) => {
  const session = await auth();
  const locale = await getLocale();
  const messages = await getMessages();

  if (params.locale != locale) {
    console.log(locale, params.locale, '===========================');
    // notFound();
  }
  return (
    <html lang={locale}>
      <meta name="robots" content="index, follow" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <meta name="theme-color" content="#000000" />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          interVar.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider session={session}>
            <NextIntlClientProvider messages={messages}>
              <React.Suspense fallback={<PageLoading />}>
                <main>{children}</main>
              </React.Suspense>
            </NextIntlClientProvider>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};
export default RootLayout;

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    'Plateforme',
    'Livreur',
    'Colis',
    'Europe',
    'Transport',
    'Logistique',
    'Afrique',
  ],
  authors: [
    {
      name: 'Wilfried ETEKA',
      url: 'https://wes.odacesoft.com',
    },
  ],
  creator: 'Odacesoft',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@shadcn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};
