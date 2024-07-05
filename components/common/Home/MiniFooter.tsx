'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const MiniFooter = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY; // Utilisez window.scrollY pour obtenir la position de défilement actuelle

      // Détermine la direction du défilement
      if (currentScroll > lastScrollTop) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }

      // Met à jour la position du dernier défilement
      setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]); // Dépendance sur lastScrollTop pour re-exécuter l'effet

  return (
    <div className="md:mt-12">
      <footer
        className={clsx(
          ' bottom-0 left-0 w-full transition-transform duration-300 ease-in-out',
          scrollDirection === 'down'
            ? ' md:transform md:translate-y-full'
            : 'md:fixed md:transform md:translate-y-0',
          'bg-white py-2 text-center border-t border-gray-200'
        )}
      >
        <div className="w-full max-w-screen-xl mx-auto py-2 px-4">
          <div className="w-full space-y-4 md:space-y-0 md:flex sm:items-center sm:justify-between">
            <ul className="md:flex md:flex-wrap space-y-4 md:space-y-0 items-center mb-6 md:text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:underline me-4 mb-4 md:me-6">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline me-4 mb-4 md:me-6"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline me-4 mb-4 md:me-6"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:underline me-4 mb-4 md:me-6"
                >
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:underline me-4 mb-4 md:me-6"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
            <span className="block text-xs text-gray-500 sm:text-center dark:text-gray-400">
              © {new Date().getFullYear()}{' '}
              <Link href="/" className="hover:underline">
                Colisfly
              </Link>
              . Tous droits réservés.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MiniFooter;
