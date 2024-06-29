// app/_app.tsx

import { AppProps, NextPageContext } from 'next/app';
import { appWithTranslation } from 'next-translate';
import { useEffect } from 'react';

interface MyAppProps extends AppProps {
  initialI18nStore: {
    [lang: string]: {
      [namespace: string]: {
        [key: string]: string;
      };
    };
  };
}

function MyApp({ Component, pageProps }: MyAppProps) {
  useEffect(() => {
    // Initialize next-translate
    // No initialization needed here with recent versions of next-translate
  }, []);

  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }: NextPageContext) => {
  // Fetch initial props from individual page components if they have getInitialProps
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  // Prepare initial i18n store
  const initialI18nStore = {
    en: {
      common: require('../locales/en/common.json'),
    },
    fr: {
      common: require('../locales/fr/common.json'),
    },
    // Add more namespaces if needed
  };

  // Return merged props
  return {
    pageProps,
    initialI18nStore,
  };
};

export default appWithTranslation(MyApp);
