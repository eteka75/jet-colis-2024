export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Colisfly | Envoyez et recevez vos colis de l'étranger",
  description: 'Envoie de colis entre particuliers au kilo et moins chère',
  url: 'https://localhost:3000',
  homeUserLogin: '/dashboard',
  miniFooterNavMenu: [],
  miniProfileImg: '/assets/images/user/default2.jpg',
  defaultProfileImg: '/assets/images/user/default2.jpg',
  footerNavMenu: [
    {
      title: "L'entreprise",
      items: [
        { href: '/', label: 'Accueil' },
        { href: '/about-us', label: 'A propos' },
        { href: '/become-affiliate', label: 'Devenez partenaire' },
        { href: '/contact', label: 'Nous contacter' },
        { href: '/blog', label: 'Le Blog' },
      ],
    },
    {
      title: 'Produit',
      items: [
        { href: '/partners', label: 'Partenaires' },
        { href: '/rates-fees', label: 'Taux et frais' },
        { href: '/destinations', label: 'Nos destinations' },
        { href: '/login', label: 'Se connecter' },
        { href: '/signup', label: 'Créer un compte' },
      ],
    },
    {
      title: 'Support',
      items: [
        { href: '/terms', label: "Contrat d'utilisation" },
        { href: '/privacy-policy', label: 'Politique de confidentialité' },
        {
          href: '/privacy-choices',
          label: 'Vos choix en matière de confidentialité',
        },
      ],
      social: true,
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
  ogImage: '/assets/statics/opem_colisfly.png',
};
