// components/LanguageSwitcher.js
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    const { pathname, asPath, query } = router;
    i18n.changeLanguage(lang);
    router.push({ pathname, query }, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>
    </div>
  );
};

export default LanguageSwitcher;
