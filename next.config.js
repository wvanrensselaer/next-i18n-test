/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ['en-US', 'fr-CA', 'fr'],
    defaultLocale: 'en-US',
    domains: [
      {
        domain: 'local.example.com',
        defaultLocale: 'en-US',
        locales: ['en-US'],
      },
      {
        domain: 'local.example.ca',
        defaultLocale: 'en-CA',
        locales: ['en-CA', 'fr-CA', 'fr'],
      },
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/fr',
  //       destination: '/fr-CA',
  //       locale: false,
  //     },
  //   ];
  // },
  trailingSlash: false,
};
