// import { NextIntlClientProvider } from 'next-intl';
// import { getLocale, getMessages } from "next-intl/server";
import "@/styles/globals.css";
import { Figtree } from "next/font/google";
import ThemeProvider from "@/src/themes/ThemeProvider";
import clsx from "clsx";

import { SessionProvider } from "next-auth/react";
// import { LanguageProvider } from '@/context/LanguageContext';

import type { Metadata } from "next";
import { AppProps } from "next/app";
import { siteConfig } from "@/src/config/website";
// import { authConfig } from "@/auth.config";
import { auth } from "@/auth";
// import { siteConfig } from '@/config/website';

// const fontSans = FontSans({
//   subsets: ['latin'],
//   variable: '--font-sans',
// });
const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const locale = await getLocale();
  // const messages = await getMessages();
  const session = await auth();
  return (
    <html lang={"fr"}>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          figtree.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <NextIntlClientProvider messages={messages}> */}
          <SessionProvider session={session}>
            <main>{children}</main>
          </SessionProvider>
          {/* </NextIntlClientProvider> */}
        </ThemeProvider>
      </body>
    </html>
  );
}

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       session: await getSession(context),
//     },
//   };
// }

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: [
    "Plateforme",
    "Livreur",
    "Colis",
    "Europe",
    "Transport",
    "Logistique",
    "Afrique",
  ],
  authors: [
    {
      name: "Wilfried ETEKA",
      url: "https://wes.odacesoft.com",
    },
  ],
  creator: "Odacesoft",
  openGraph: {
    type: "website",
    locale: "fr_FR",
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
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@shadcn",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};
