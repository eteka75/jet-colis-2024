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

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

// export const getPhotos = async (query, perPage = 5) => {
//   const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=${perPage}`;
//   const response = await axios.get(url);
//   return response.data.results.map(photo => photo.urls.regular);
// };

const TrajetCard = () => {
  const [photos, setPhotos] = useState<PhotosData>({});
  const destinations = [
    'Paris',
    'New York',
    'Tokyo',
    'Sydney',
    'Cotonou',
    'Abomey-calavi',
  ];
  const getPhotos = async (query, perPage = 1) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}&per_page=${perPage}`;
    const response = await axios.get(url);
    return response.data.results.map((photo) => photo.urls.regular);
  };

  const lists = [
    {
      id: 1,
      photo: 'photo1.jpeg',
      depart: 'Cotonou',
      destination: 'Lusaka',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 2,
      photo: 'photo2.jpeg',
      depart: 'Paris',
      destination: 'New York',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 3,
      photo: 'photo3.jpeg',
      depart: 'Washington',
      destination: 'Libreville',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 4,
      photo: 'photo1.jpeg',
      depart: 'Abidjan',
      destination: 'Marseille',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 5,
      photo: 'photo1.jpeg',
      depart: 'Namibie',
      destination: 'Sénégal',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 6,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Paris',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 7,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Bamako',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 8,
      photo: 'photo1.jpeg',
      depart: 'Pakistan',
      destination: 'Toronto',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 9,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Moscou',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 10,
      photo: 'photo1.jpeg',
      depart: 'Mali',
      destination: 'Lomé',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 1,
      photo: 'photo1.jpeg',
      depart: 'Cotnou',
      destination: 'Paris',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 2,
      photo: 'photo2.jpeg',
      depart: 'Paris',
      destination: 'New York',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 3,
      photo: 'photo3.jpeg',
      depart: 'Washington',
      destination: 'Libreville',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 4,
      photo: 'photo1.jpeg',
      depart: 'Abidjan',
      destination: 'Marseille',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 5,
      photo: 'photo1.jpeg',
      depart: 'Paris',
      destination: 'Sénégal',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 6,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Paris',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 7,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Paris',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 8,
      photo: 'photo1.jpeg',
      depart: 'Pakistan',
      destination: 'Toronto',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 9,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Moscou',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 10,
      photo: 'photo1.jpeg',
      depart: 'Mali',
      destination: 'Lomé',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 1,
      photo: 'photo1.jpeg',
      depart: 'Cotnou',
      destination: 'Rennes',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 2,
      photo: 'photo2.jpeg',
      depart: 'Paris',
      destination: 'Reims',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 3,
      photo: 'photo3.jpeg',
      depart: 'Washington',
      destination: 'Rouen',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 4,
      photo: 'photo1.jpeg',
      depart: 'Abidjan',
      destination: 'Havre',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 5,
      photo: 'photo1.jpeg',
      depart: 'Paris',
      destination: 'Bordeaux',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 6,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Nantes',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 7,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Strasbourg',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 8,
      photo: 'photo1.jpeg',
      depart: 'Pakistan',
      destination: 'Monaco',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 9,
      photo: 'photo1.jpeg',
      depart: 'Parakou',
      destination: 'Toulouse',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 10,
      photo: 'photo1.jpeg',
      depart: 'Mali',
      destination: 'Lyon',
      tarif: '8000',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 10,
      photo: 'photo1.jpeg',
      depart: 'Mali',
      destination: 'Nice',
      tarif: '450',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
    {
      id: 10,
      photo: 'photo1.jpeg',
      depart: 'Mali',
      destination: 'Porto Novo',
      tarif: '450',
      devise: 'Euro',
      unite: 'Kg',
      date_depart: '15-07-2027',
      kilo_disponible: 8,
      unite_kilo_disponible: 'Kg',
    },
  ];
  type List = {
    destination: string;
  };

  type PhotosData = {
    [key: string]: string[];
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      const photosData = {};
      for (const list of lists) {
        const theKey = list?.destination || '';
        try {
          photosData[theKey] = await getPhotos(list.destination);
        } catch (error) {
          console.error(`Failed to fetch photos for ${theKey}:`, error);
          photosData[theKey] = [];
        }
      }
      setPhotos(photosData);
    };

    fetchPhotos();
    console.log(photos);
  }, []);

  return (
    <div className="bg-accent dark:bg-background">
      <div className="container-fluid py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
          {lists.map(
            (
              {
                id,
                photo,
                depart,
                destination,
                devise,
                unite,
                tarif,
                date_depart,
                kilo_disponible,
                unite_kilo_disponible,
              },
              index
            ) => (
              <div key={index}>
                <div className="group relative rounded-md pb-2 hover:shadow">
                  <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-secondary/50 lg:aspect-none group-hover:opacity-75 ">
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                      {photos[destination]?.map((url, index) => (
                        <div key={index} className="h-[300px]">
                          <Image
                            src={url}
                            alt={destination}
                            width={500}
                            height={300}
                            className="rounded-lg max-w-full  object-cover h-[300px]"
                            // style={{ width: '100%', height: 'auto', margin: '0px' }}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex_ hidden justify-between top-3 absolute right-4 ">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        <div className="text-xs flex  gap-1 items-center bg-secondary shadow px-2 py-1 rounded-full">
                          <div className="relative  inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600">
                            <span className="font-medium text-xs text-gray-100 dark:text-gray-300">
                              JL
                            </span>
                          </div>
                          <div> Wilfried ETEKA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="w-full px-2">
                      <div className="text-sm  flex flex-wrap justify-between items-center ">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute_ inset-0"
                          ></span>
                          <h2 className="text-lg mb-0 font-medium">
                            {depart} -{' '}
                            <span className="text-primary">{destination}</span>
                          </h2>
                        </a>
                        {/* <GiAirplaneDeparture className="me-2 h-5 w-5" /> */}
                      </div>
                      <div className="flex justify-between">
                        <p className="text-sm font-medium ">
                          Départ le {`${date_depart}`}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {`${tarif} ${devise}/${unite}`}
                        </p>
                      </div>
                      <div className="my-2">
                        <NbStart rating={Math.random() * 5} className="__" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default TrajetCard;
