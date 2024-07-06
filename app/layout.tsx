import { auth } from '@/auth';
import { siteConfig } from '@/src/config/website';
import ThemeProvider from '@/src/themes/ThemeProvider';
import '@/styles/globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Figtree } from 'next/font/google';

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
  const session = await auth();
  return (
    <html lang={'fr'}>
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          figtree.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider session={session}>
            <main>{children}</main>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

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
