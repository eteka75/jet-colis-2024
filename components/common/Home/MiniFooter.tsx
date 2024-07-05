import Link from 'next/link';
import React from 'react';

const MiniFooter = () => {
  return (
    <div>
      <footer className="bg-white border-t  dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto py-2 px-4 ">
          <div className="sm:flex  sm:items-center sm:justify-between">
            <ul className="md:flex md:flex-wrap space-y-4 md:space-y-0  items-center mb-6 md:text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
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
                  A propos
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline me-4 mb-4 md:me-6"
                >
                  Potitique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:underline me-4 mb-4 md:me-6"
                >
                  Condition d'utilisation
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
              . Tout droits réservés.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MiniFooter;
