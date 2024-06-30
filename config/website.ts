export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Colisfly',
  description: 'Envoie de colis entre particuliers au kilo et moins chère',
  url: 'https://localhost:3000',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
  ogImage: '/assets/statics/opem_colisfly.png',
};
