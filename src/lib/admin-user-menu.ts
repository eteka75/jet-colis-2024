import { ComponentType, SVGProps } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';

import {
  Gauge,
  LineChart,
  MessageSquare,
  PackagePlus,
  Plus,
  Route,
  Settings2,
  User2,
} from 'lucide-react';

import { IconType as ReactIconsType } from 'react-icons';

// Définir un type pour les icônes de Lucide
type LucideIcon = ComponentType<SVGProps<SVGSVGElement>>;

// Définir un type qui englobe les deux types d'icônes
type MenuIconType = LucideIcon | ReactIconsType;

// Interface MenuItem
// Interface MenuItem
export interface MenuItem {
  label: string;
  icon: MenuIconType; // Utiliser le type personnalisé
  href?: string;
  name?: string;
  disabled?: boolean;
  subMenu?: MenuItem[]; // Ajouter des sous-menus
}

// Liste des éléments de menu
// Liste des éléments de menu
export const adminMenu: MenuItem[] = [
  {
    label: 'Tableau de bord',
    icon: Gauge,
    href: '/dashboard',
    name: 'dashboard',
  },
  {
    label: 'Trajets',
    icon: Route,
    name: 'trajets',
    subMenu: [
      {
        label: 'Tous les trajets',
        icon: Route,
        href: '/dashboard/trajets',
        name: 'all_trajets',
      },
      {
        label: 'Ajouter un trajet',
        icon: Plus,
        href: '/dashboard/trajets/add',
        name: 'add_trajet',
      },
    ],
  },
  {
    label: 'Commandes',
    icon: PackagePlus,
    href: '/dashboard/commandes',
    name: 'commandes',
  },
  {
    label: 'Messages',
    icon: MessageSquare,
    href: '/dashboard/messages',
    name: 'messages',
  },
  {
    label: 'Utilisateurs',
    icon: User2,
    href: '/dashboard/users',
    name: 'users',
  },
  {
    label: 'Analytics',
    icon: LineChart,
    href: '/dashboard/analytics',
    name: 'analytics',
  },
  {
    label: 'Settings',
    icon: Settings2,
    href: '/dashboard/settings',
    name: 'settings',
  },
  {
    label: 'Logout',
    icon: FaSignOutAlt,
    href: '/logout',
    name: 'logout',
  },
];
