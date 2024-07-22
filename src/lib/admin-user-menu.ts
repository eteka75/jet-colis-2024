import {
  FaHome,
  FaBox,
  FaUsers,
  FaChartLine,
  FaCog,
  FaSignOutAlt,
} from 'react-icons/fa';

// Utilisez React.ComponentType comme type pour les icônes
import { ComponentType } from 'react';
import {
  Gauge,
  LineChart,
  MessageSquare,
  PackagePlus,
  Route,
  Settings2,
  User2,
} from 'lucide-react';

export interface MenuItem {
  label: string;
  icon: ComponentType; // Remplacez Icon par ComponentType
  href: string;
}

export const adminMenu: MenuItem[] = [
  { label: 'Tableau de bord', icon: Gauge, href: '/dashboard' },
  { label: 'Trajets', icon: Route, href: '/orders' },
  { label: 'Commandes', icon: PackagePlus, href: '/commandes' },
  { label: 'Messages', icon: MessageSquare, href: '/users' },
  { label: 'Utilisateurs', icon: User2, href: '/users' },
  { label: 'Analytics', icon: LineChart, href: '/analytics' },
  { label: 'Settings', icon: Settings2, href: '/settings' },
  { label: 'Logout', icon: FaSignOutAlt, href: '/logout' },
];
