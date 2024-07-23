import {
  Plus,
  Search,
  MessageCircle,
  Heart,
  SearchIcon,
  HelpCircle,
  Info,
  UserCheck,
  UserPlus,
  LogOut,
  ChevronRight,
} from 'lucide-react';

const menuItems = {
  themeSwitcher: {
    label: 'Changer de thème',
    component: 'SwithtTheme',
  },
  mainLinks: [
    {
      href: '/new-travel',
      icon: Plus,
      text: 'Plublier une offre',
    },
    {
      href: '/search',
      icon: Search,
      text: 'Rechercher',
    },
  ],
  userLinks: [
    {
      href: '/user/messages',
      icon: MessageCircle,
      text: 'Messages',
    },
    {
      href: '/user/favoris',
      icon: Heart,
      text: 'Favoris',
    },
    {
      href: '/search/saved',
      icon: SearchIcon,
      text: 'Recherches sauvegardées',
    },
  ],
  helpLinks: [
    {
      href: '/help',
      icon: HelpCircle,
      text: 'Aide',
    },
    {
      href: '/faq',
      icon: Info,
      text: 'FAQ',
    },
  ],
  authLinks: [
    {
      href: '/signin',
      icon: UserCheck,
      text: 'Se connecter',
    },
    {
      href: '/signup',
      icon: UserPlus,
      text: 'Créer un compte',
    },
  ],
  footerLinks: [
    {
      href: '#',
      icon: LogOut,
      text: 'Déconnexion',
      className: 'text-red-500 font-bold',
    },
    {
      href: '/best-practices',
      text: 'Bonnes pratiques',
      icon: ChevronRight,
      className: 'flex gap-2 justify-between',
    },
    {
      href: '/advantages',
      text: 'Avantages',
      icon: ChevronRight,
      className: 'flex gap-2 justify-between',
    },
  ],
};

export default menuItems;
