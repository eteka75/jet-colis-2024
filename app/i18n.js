'use client';
import { getRequestConfig } from 'next-intl/server';
import { useLanguage } from '@/context/LanguageContext';
import { getCookie } from 'cookies-next';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  //const locale = 'fr';
  const locale = 'en';
  //const locale = getLang || 'fr';
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
// // i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import nextI18NextConfig from './next-i18next.config.js';

// i18n.use(initReactI18next).init({
//   fallbackLng: nextI18NextConfig.i18n.defaultLocale,
//   debug: process.env.NODE_ENV === 'development',
//   interpolation: {
//     escapeValue: false, // React already safes from xss
//   },
//   backend: {
//     loadPath: '/locales/{{lng}}/{{ns}}.json',
//   },
// });

// export default i18n;

// import { createInstance } from 'i18next';
// import { initReactI18next } from 'react-i18next/initReactI18next';
// import resourcesToBackend from 'i18next-resources-to-backend';
// import i18nConfig from '@/i18nConfig';

// export default async function initTranslations(
//   locale,
//   namespaces,
//   i18nInstance,
//   resources
// ) {
//   i18nInstance = i18nInstance || createInstance();

//   i18nInstance.use(initReactI18next);

//   if (!resources) {
//     i18nInstance.use(
//       resourcesToBackend(
//         (language, namespace) =>
//           import(`@/locales/${language}/${namespace}.json`)
//       )
//     );
//   }

//   await i18nInstance.init({
//     lng: locale,
//     resources,
//     fallbackLng: i18nConfig.defaultLocale,
//     supportedLngs: i18nConfig.locales,
//     defaultNS: namespaces[0],
//     fallbackNS: namespaces[0],
//     ns: namespaces,
//     preload: resources ? [] : i18nConfig.locales,
//   });

//   return {
//     i18n: i18nInstance,
//     resources: i18nInstance.services.resourceStore.data,
//     t: i18nInstance.t,
//   };
// }
