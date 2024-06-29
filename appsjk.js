/** @type {import('next').NextConfig} */
// next.config.js
const withNextIntl = require('next-intl/plugin')(
  './next-intl.config.js' // Assurez-vous que le chemin est correct
);

module.exports = withNextIntl({
  // Ajoutez ici votre configuration Next.js additionnelle si nécessaire
});
// next.config.js
// const { withNextIntl } = require('next-intl/plugin');

// module.exports = withNextIntl({
//   // Votre configuration Next.js additionnelle ici
// });

// const { i18n } = require('./next-i18next.config');

// module.exports = {
//   i18n,
//   reactStrictMode: true,
// };
// module.exports = {
//   i18n: {
//     locales: ['en', 'fr'], //, 'es', 'de', 'it'
//     defaultLocale: 'fr',
//   },
//   //   async redirects() {
//   //     return [
//   //       {
//   //         source: '/',
//   //         destination: '/fr', // Redirige vers la langue par défaut
//   //         permanent: true,
//   //       },
//   //     ];
//   //   },
// };
