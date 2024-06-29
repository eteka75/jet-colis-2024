'use client';
import Link from 'next/link';
import React, { use } from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { BsTwitterX } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className="border-t bg-light text-xl md:text-sm shadow-inner_  dark:bg-accent/80 dark:border-accent/10 pb-6 pt-8">
      {/* <footer className="bg-gradient-to-t from-emerald-700 via-emerald-850 via-emerald-900    to-emerald-800 text-white text-sm py-8"> */}
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <div className="mb-4">
              <h3 className="font-bold text-xl md:text-lg mb-4">
                L'entreprise
              </h3>
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  A propos
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="hover:underline">
                  Devenez affilié
                </Link>
              </li>
              <li>
                <Link href="/rates-fees" className="hover:underline">
                  Taux et frais
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:underline">
                  Sécurité
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Le Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="font-bold text-xl md:text-lg mb-4">Produit</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/partners" className="hover:underline">
                  Partenaires
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline">
                  Se connecter
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:underline">
                  S'inscrire
                </Link>
              </li>
              <li>
                <Link href="/referral" className="hover:underline">
                  Parrainer des amis
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:underline">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="font-bold text-xl md:text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:underline">
                  Contrat d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/privacy-choices" className="hover:underline">
                  Vos choix en matière de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/privacy-choices" className="hover:underline">
                  Conditions d'utlisation
                </Link>
              </li>
            </ul>
            <div className="flex mt-4 space-x-4">
              <a
                href="http://facebook.com/colistify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="h-6 w-6 _text-blue-800 dark:text-white" />
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
        </div>
        <div className=" dark:text-white/50 text-xs text-center">
          © {new Date().getFullYear()} Colistify. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
