<<<<<<< HEAD
"use client";
// import axios from "axi";
import { useEffect, useState } from "react";
import { PhotosData, list_trajets } from "@/lib/definitions";
import { fetchPhotosForLists } from "@/lib/actions";
import PageLoading from "../ui/PageLoading";
import TrajetItem from "../ui/TrajetItem";
=======
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
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const TrajetCard = () => {
  const [photos, setPhotos] = useState<PhotosData>({});
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(true);

  useEffect(() => {
<<<<<<< HEAD
=======
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
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
    const handleFetchedPhotos = async () => {
      try {
        const photos = await fetchPhotosForLists(list_trajets);
        setPhotos(photos);
<<<<<<< HEAD
      } catch (error) {
        console.error("Error fetching photos:", error);
=======
        console.log('Fetched photos:', photos);
        // Vous pouvez maintenant utiliser les photos comme vous le souhaitez
      } catch (error) {
        console.error('Error fetching photos:', error);
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
      } finally {
        setLoading(false);
      }
    };
    handleFetchedPhotos();
  }, []);
<<<<<<< HEAD
  const cards = list_trajets.map((list_trajets, index) => (
    <TrajetItem key={index} data={list_trajets} photos={photos} />
=======
  const ct = list_trajets.map((list_trajets, index) => (
    <TrajetItem data={list_trajets} photos={photos} />
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
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
<<<<<<< HEAD
          {cards}
=======
          {ct}
>>>>>>> 18d5de831803792042b8d33d075138627dd1982c
        </div>
      </div>
    </div>
  );
};
export default TrajetCard;
