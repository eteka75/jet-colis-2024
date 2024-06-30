'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import axios from 'axios';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import NbStart from '../ui/NbStar';
import { PhotosData, list_trajets } from '@/lib/definitions';
import { fetchPhotosForLists, getPhotos } from '@/app/lib/actions';
import PageLoading from '../ui/PageLoading';
import TrajetItem from '../ui/TrajetItem';

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const TrajetCard = () => {
  const [photos, setPhotos] = useState<PhotosData>({});
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(true);

  useEffect(() => {
    // const fetchPhotos = async () => {
    //   const photos = {};
    //   const lists = list_trajets;
    //   for (const list of lists) {
    //     const theKey = list?.destination || '';
    //     try {
    //       photos[theKey] = await getPhotos(list.destination);
    //     } catch (error) {
    //       console.error(`Failed to fetch photos for ${theKey}:`, error);
    //       photos[theKey] = [];
    //     }
    //   }
    const handleFetchedPhotos = async () => {
      try {
        const photos = await fetchPhotosForLists(list_trajets);
        setPhotos(photos);
        console.log('Fetched photos:', photos);
        // Vous pouvez maintenant utiliser les photos comme vous le souhaitez
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };
    handleFetchedPhotos();
  }, []);
  const ct = list_trajets.map((list_trajets, index) => (
    <TrajetItem data={list_trajets} photos={photos} />
  ));
  if (loading) {
    return <PageLoading />;
  }

  return (
    <div className="bg-accent dark:bg-background">
      <div className="container-fluid py-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 2xl:grid-cols-5 gap-4"
        >
          {ct}
        </div>
      </div>
    </div>
  );
};
export default TrajetCard;
