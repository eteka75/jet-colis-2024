'use client';
// import axios from "axi";
import { useEffect, useState } from 'react';
import { PhotosData, list_trajets } from '@/lib/definitions';
import { fetchPhotosForLists } from '@/lib/actions';
import PageLoading from '../ui/PageLoading';
import TrajetItem from '../ui/TrajetItem';

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const TrajetCard = () => {
  const [photos, setPhotos] = useState<PhotosData>({});
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(true);

  useEffect(() => {
    const handleFetchedPhotos = async () => {
      try {
        const photos = await fetchPhotosForLists(list_trajets);
        console.log(photos);
        setPhotos(photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };
    handleFetchedPhotos();
  }, []);
  const cards = list_trajets.map((list_trajet, index) => (
    <TrajetItem key={index} data={list_trajet} photos={photos} />
  ));
  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="bg-accent dark:bg-background py-4">
      <div className="container-fluid py-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 2xl:grid-cols-5 gap-4"
        >
          {cards}
        </div>
      </div>
    </div>
  );
};
export default TrajetCard;
