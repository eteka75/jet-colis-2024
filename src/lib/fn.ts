import { fr } from 'date-fns/locale';
import { parse, isValid, format } from 'date-fns';

/**
 * Convertit une date en format "10-02-2015" en une chaîne formatée comme "Mardi 25 Février 2012".
 * @param {string} dateString - La chaîne de date au format "dd-MM-yyyy".
 * @returns {string} - La date formatée.
 */
export function formatDate(dateString: string) {
  // Convertir la chaîne de date en objet Date
  const date = parse(dateString, 'dd-MM-yyyy', new Date());

  // Formater la date
  return format(date, 'EEEE d MMMM yyyy', { locale: fr });
}

// export const isValidDateFormate = (date: string): boolean => {
//   // Regex pour le format dd/MM/yyyy
//   const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
//   const match = date.match(regex);

//   if (!match) return false;

//   const [, day, month, year] = match.map(Number);

//   // Vérifier les jours valides en fonction du mois et de l'année
//   const isValidDay = day >= 1 && day <= 31;
//   const isValidMonth = month >= 1 && month <= 12;
//   const isValidYear = year >= 1900 && year <= 2100;

//   // Vérifier les jours par mois
//   if (month === 2) {
//     const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
//     const maxDays = isLeapYear ? 29 : 28;
//     if (day > maxDays) return false;
//   } else if ([4, 6, 9, 11].includes(month)) {
//     if (day > 30) return false;
//   }

//   return isValidDay && isValidMonth && isValidYear;
// };

export const getErrorMessage = (error: any) => {
  if (error && typeof error.message === 'string') {
    return error.message;
  }
  return null;
};

export const isValidDateFormat = (value: string) => {
  const date = parse(value, 'dd/MM/yyyy', new Date());
  return isValid(date);
};
