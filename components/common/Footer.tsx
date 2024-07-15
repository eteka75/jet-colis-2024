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
import { siteConfig } from '@/src/config/website';

const Footer = () => {
  const { footerNavMenu } = siteConfig;
  return (
    <footer className="mb-24 md:mb-8 border-t border-slate-200  bg-white text-xl md:text-sm shadow-inner_  dark:bg-gray-900 dark:border-background/20 pb-6 pt-8 ">
      {/* <footer className="bg-gradient-to-t from-emerald-700 via-emerald-850 via-emerald-900    to-emerald-800 text-white text-sm py-8"> */}

      <div className="container">
        <div className="flex-wrap justify-between hidden lg:flex">
          {footerNavMenu.map((menu, index) => (
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

        <Accordion
          type="single"
          collapsible
          className="w-full lg:hidden border-t_"
        >
          {footerNavMenu.map((menu, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-bold  text-lg">
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
