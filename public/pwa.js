import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Précache les fichiers manifestés
precacheAndRoute(self.__WB_MANIFEST);

// Utilisez le runtime caching pour toutes les requêtes GET
registerRoute(
  ({ request }) => request.destination === 'document',
  new StaleWhileRevalidate()
);
