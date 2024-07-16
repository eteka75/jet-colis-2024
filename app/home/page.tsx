import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  const t = useTranslations('Index');
  return (
    <div>
      <ul>
        <li>
          <Link href="/" locale="en">
            English
          </Link>
        </li>
        <li>
          <Link href="/" locale="fr">
            Français
          </Link>
        </li>
      </ul>
      <hr />
      <h1>{t('title')}</h1>
    </div>
  );
};

export default Page;
