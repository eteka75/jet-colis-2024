import axios from 'axios';
import { signOut } from 'next-auth/react';

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export async function handleSignOut() {
  await signOut();
}

export const getPhotos = async (
  query: string,
  perPage = 1
): Promise<string[]> => {
  return getPhotos2(query, perPage);
};

export const getPhotos1 = async (
  query: string,
  perPage = 1
): Promise<string[]> => {
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=${perPage}`;
  const response = await axios.get(url);
  const photoUrls = response.data.results.map(
    (photo: any) => photo.urls.regular
  );
  return photoUrls;
};

export const fetchPhotosForLists = async (
  lists: { destination?: string }[]
): Promise<{ [key: string]: string[] }> => {
  // Créer un tableau de promesses pour toutes les destinations
  const photoPromises = lists.map(async (list) => {
    const theKey = list?.destination || '';
    try {
      const photos = await getPhotos(theKey);
      return { key: theKey, photos };
    } catch (error) {
      console.error(`Failed to fetch photos for ${theKey}:`, error);
      return { key: theKey, photos: [] };
    }
  });

  // Attendre que toutes les promesses soient résolues
  const photoResults = await Promise.all(photoPromises);

  // Créer un objet photos avec les résultats
  const photos = photoResults.reduce(
    (acc, { key, photos }) => {
      acc[key] = photos;
      return acc;
    },
    {} as { [key: string]: string[] }
  );

  // Retourner l'objet photos
  return photos;
};

export const getPhotos2 = async (
  query: string,
  perPage = 1
): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=${perPage}`;
        const response = await axios.get(url);
        const photoUrls = response.data.results.map(
          (photo: any) => photo.urls.regular
        );
        resolve(photoUrls);
      } catch (error) {
        reject(error);
      }
    }, 10); // Augmenter le délai pour simuler un chargement plus réaliste
  });
};
