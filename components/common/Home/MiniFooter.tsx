'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

const MiniFooter = () => {
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollTopRef.current) {
        setScrollDirection('up');
      } else {
        setScrollDirection('down');
      }

      lastScrollTopRef.current = currentScroll <= 0 ? 0 : currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="md:mt-12">
      <footer
        className={clsx(
          'bottom-0 left-0 w-full transition-transform duration-300 ease-in-out',
          scrollDirection === 'down'
            ? 'md:transform md:translate-y-full'
            : 'md:fixed md:transform md:translate-y-0',
          'bg-white py-2 border-t border-gray-200'
        )}
      >
        <div className="w-full max-w-screen-xl mx-auto py-2 px-4">
          <div className="w-full space-y-4 md:space-y-0 md:flex sm:items-center sm:justify-between">
            <ul className="md:flex flex-col md:flex-wrap space-y-2 md:space-y-0 items-center mb-6 md:text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/about', label: 'À propos' },
                { href: '/privacy', label: 'Politique de confidentialité' },
                { href: '/terms', label: "Conditions d'utilisation" },
                { href: '/support', label: 'Support' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href} className="border-b pb-2 md:border-b-0">
                  <Link
                    href={link.href}
                    className="hover:underline me-4 mb-4 md:me-6"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="block text-xs text-gray-500 dark:text-gray-400">
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
