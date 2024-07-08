'use client';
import Link from 'next/link';
import React, { use } from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
import NbStart from './ui/NbStar';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const menus = [
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
];

const Footer = () => {
  return (
    <footer className="border-t bg-accent text-xl md:text-sm shadow-inner_  dark:bg-gray-900/90 dark:border-background/20 pb-6 pt-8">
      {/* <footer className="bg-gradient-to-t from-emerald-700 via-emerald-850 via-emerald-900    to-emerald-800 text-white text-sm py-8"> */}

      <div className="container">
        <div className="flex-wrap justify-between hidden lg:flex">
          {menus.map((menu, index) => (
            <div key={index} className="w-full md:w-1/3 mb-6">
              <div className="mb-4">
                <h3 className="font-bold text-lg mb-4">{menu.title}</h3>
              </div>
              <ul className="space-y-2">
                {menu.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              {menu.social && (
                <div className="flex mt-4 space-x-4">
                  <a
                    href="http://facebook.com/colistify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="h-6 w-6 dark:text-white" />
                  </a>
                  <a
                    href="http://twitter.com/colistify"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitterX className="h-6 w-6 text-gray-950 dark:text-white" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        <Accordion type="single" collapsible className="w-full lg:hidden">
          {menus.map((menu, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-bold mb-2 text-lg">
                {menu.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-lg opacity-90">
                  {menu.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href={item.href} className="hover:underline">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="py-2 text-center lg:hidden">
          <div className="flex mt-4 space-x-4">
            <a
              href="http://facebook.com/colistify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="h-6 w-6 dark:text-white" />
            </a>
            <a
              href="http://twitter.com/colistify"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="h-6 w-6 text-gray-950 dark:text-white" />
            </a>
          </div>
        </div>
        <div className="py-4 lg:py-0 dark:text-white/50 text-xs lg:text-center">
          © {new Date().getFullYear()} Colistify. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
