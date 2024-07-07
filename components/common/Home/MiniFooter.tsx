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
    <div className={clsx(scrollDirection === 'up' ? 'md:mt-20' : '')}>
      <footer
        className={clsx(
          'bottom-0 left-0 w-full transition-transform duration-300 ease-in-out',
          scrollDirection === 'down'
            ? 'md:transform___md:translate-y-full'
            : 'md:mt-12 md:fixed md:transform md:translate-y-0',
          'bg-white py-2 border-t border-gray-200'
        )}
      >
        <div className="w-full max-w-screen-xl mx-auto py-2 px-4">
          <div className="w-full space-y-4 md:space-y-0 md:flex sm:items-center sm:justify-between">
            <ul className="md:flex w-full text-lg md:text-md  md:flex-auto space-y-2 md:space-y-0 items-center mb-6 md:text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/about', label: 'À propos' },
                { href: '/privacy', label: 'Politique de confidentialité' },
                { href: '/terms', label: "Conditions d'utilisation" },
                { href: '/support', label: 'Support' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li
                  key={link.href}
                  className="border-b pb-2 md:pb-0 md:border-b-0 me-0 md:me-2 lg:me-4"
                >
                  <Link href={link.href} className="hover:underline ">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="block w-full md:w-1/4 text-xs mb-8 md:mb-0 opacity-70">
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
