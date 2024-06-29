// middleware.ts
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';
// import Negotiator from 'negotiator';
// import i18n from './next-intl.config';
// import { match as matchLocale } from '@formatjs/intl-localematcher';
// import { setLanguageCookie, getLanguageCookie } from './lib/language'; // Assurez-vous d'importer correctement

import { NextRequest } from 'next/server';

// const locales = i18n.locales;
// const defaultLocale = i18n.defaultLocale;

// function getLocaleFromHeaders(req: NextRequest): string {
//   const negotiator = new Negotiator({
//     headers: {
//       'accept-language': req.headers.get('accept-language') || '',
//     },
//   });
//   const languages = negotiator.languages(locales);
//   return languages.find((lang) => locales.includes(lang)) || defaultLocale;
// }

// export function middleware(req: NextRequest) {
//   // Récupérer la langue de l'utilisateur depuis les cookies ou les entêtes
//   let locale = getLanguageCookie();

//   if (!locale) {
//     // Si le cookie n'existe pas, obtenir la langue préférée du navigateur
//     locale = getLocaleFromHeaders(req);
//   }

//   // Vérifier si la langue est valide
//   locale = matchLocale([locale], locales, defaultLocale);

//   const res = NextResponse.next();
//   setLanguageCookie(locale); // Assurez-vous que cette fonction est correctement implémentée

//   return res;
// }
export function middleware(req: NextRequest) {}
