// // import { getRequestConfig } from 'next-intl/server';
// import { getLanguageCookie } from '@/lib/language';
// import { getCookie } from 'cookies-next';

// export default getRequestConfig(async (req) => {
//   // Provide a static locale, fetch a user setting,
//   // read from `cookies()`, `headers()`, etc.
//   const locale = 'fr';
//   // const locale = getLanguageCookie(req) || 'fr';
//   return {
//     locale,
//     messages: (await import(`../messages/${locale}.json`)).default,
//   };
// });
