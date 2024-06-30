import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NbStart from '../ui/NbStar';
import { PhotosData, TrajetType } from '@/lib/definitions';
import { BsImageAlt } from 'react-icons/bs';
import { RiImageLine } from 'react-icons/ri';
// Skeleton component
const Skeleton = ({ width, height }) => (
  <div
    style={{ width, height }}
    className="animate-pulse bg-gray-300 dark:bg-secondary/50 flex justify-center items-center"
  >
    <RiImageLine className="w-10 h-10 text-gray-500" />
  </div>
);

const TrajetItem = ({ data, photos }) => {
  const {
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
  } = data;

  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(0);

  const handleImageLoad = () => {
    setImageLoaded((prev) => prev + 1);
  };

  useEffect(() => {
    if (photos[destination]) {
      setLoading(false);
    }
  }, [imageLoaded, photos, destination]);

  return (
    <div>
      <div className="group relative rounded-md pb-2">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-secondary/50 lg:aspect-none group-hover:opacity-75 ">
          {loading ? (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {photos[destination]?.map((url, index) => (
                <Skeleton key={index} width="500px" height="300px" />
              ))}
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {photos[destination]?.map((url, index) => (
                <div key={index} className="h-[300px] ">
                  <Image
                    src={url}
                    alt={destination}
                    width={500}
                    height={300}
                    className="rounded-lg max-w-full bg-slate-600 object-cover h-[300px]"
                    onLoadingComplete={handleImageLoad}
                  />
                </div>
              ))}
            </div>
          )}
          <div className="flex_ hidden justify-between top-3 absolute right-4 ">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <div className="text-xs flex gap-1 items-center bg-secondary shadow px-2 py-1 rounded-full">
                <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden bg-gray-400 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-xs text-gray-100 dark:text-gray-300">
                    JL
                  </span>
                </div>
                <div>Wilfried ETEKA</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div className="w-full px-2">
            <div className="text-sm flex flex-wrap justify-between items-center">
              <a href="#">
                <span aria-hidden="true" className="absolute_ inset-0"></span>
                <h2 className="text-lg mb-0 font-medium">
                  {depart} - <span className="text-primary">{destination}</span>
                </h2>
              </a>
            </div>
            <div className="flex justify-between">
              <p className="text-sm font-medium">
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
  );
};

export default TrajetItem;
