import { parse, format } from 'date-fns';
import { fr } from 'date-fns/locale';

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
