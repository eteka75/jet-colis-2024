// utils/language.js
// import { getCookie, setCookie } from 'cookies-next';
import { NextRequest } from 'next/server';
const defaultLocale = 'fr';

export const setLanguageCookie = (locale: string) => {
  console.log('save langague', locale);
  // setCookie('NEXT_LOCALE', locale, { httpOnly: true, secure: true });
};
export const getLanguageCookie = (): string | undefined => {
  // Assuming you have a way to globally access `req`
  // Example: const req = useContext(YourRequestContext);
  const lang = 'fr';
  // const req: NextRequest | undefined = undefined; // Replace with actual access method
  // const lang = getCookie('NEXT_LOCALE');
  return lang;
};
