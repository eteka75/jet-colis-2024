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
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=${perPage}`;
  const response = await axios.get(url);
  const photoUrls = response.data.results.map(
    (photo: any) => photo.urls.regular
  );
  return photoUrls;
  //     return new Promise((resolve, reject) => {

  //     setTimeout(async () => {
  //   try {

  //     resolve(photoUrls);
  //   } catch (error) {
  //     reject(error);
  //   }
  // }, 0); // Augmenter le délai pour simuler un chargement plus réaliste
  //   });
};
