import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import NbStart from '../ui/NbStar';
import { RiImageLine } from 'react-icons/ri';
import Link from 'next/link';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { DestinationImageType, TrajetItemProps } from '@/src/lib/definitions';
import { Skeleton } from '@/components/ui/skeleton';
import { GoPackageDependents } from 'react-icons/go';
import { User } from '@prisma/client';

// Skeleton component
const Skeletond = ({
  width,
  height,
  link,
}: {
  width: string;
  height: string;
  link: string;
}) => (
  <div
    style={{ width, height }}
    className="animate-pulse bg-gray-300 dark:bg-secondary/50 flex justify-center items-center"
  >
    <Link className="d-con" href={link}>
      <RiImageLine className="w-10 h-10 text-gray-500" />
    </Link>
  </div>
);

// Définition du composant avec les props typées
const DestinationImage: React.FC<DestinationImageType> = ({
  url,
  title,
  subtitle,
  user,
}) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl max-w-md mx-auto group aspect-w-1 aspect-h-1 min-h-[300px]">
      <Image
        alt={title ?? 'image'} // Utilisez la prop title pour l'alt text
        className="absolute inset-0 w-full h-full object-cover"
        src={url} // Utilisez la prop url pour l'image source
        layout="fill" // Utilisez layout="fill" pour que l'image remplisse le conteneur
        objectFit="cover" // Assure que l'image s'adapte correctement
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-500/40 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
      <div className="absolute inset-0 flex flex-col justify-end items-center group-hover:opacity-100 opacity-0 transition-opacity duration-300 p-8">
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <div className="text-sm leading-6 text-gray-300 mt-2">{subtitle}</div>
      </div>
    </article>
  );
};

const TrajetItem: React.FC<TrajetItemProps> = ({ data, photos }) => {
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
    if (photos[destination] && photos[destination].length > 0) {
      setLoading(false);
      setImageLoaded(1);
    }
  }, [photos, destination]);

  return (
    <div>
      <div className="group relative rounded-xl pb-2">
        <div className="aspect-h-1_aspect-w-1 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-secondary/50 lg:aspect-none group-hover:opacity-75">
          {loading ? (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <Skeleton className="h-[300px] bg-slate-300/50 items-center justify-center flex w-full shadow">
                <Link className="d-con" href={`/journey/${id}`}>
                  <RiImageLine className="w-10 h-10 opacity-40" />
                </Link>
              </Skeleton>
            </div>
          ) : (
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {photos[destination]?.map(
                (url: string | undefined, index: number) => (
                  <Link className="w-full" key={index} href={`/journey/${id}`}>
                    <div className="mx-auto">
                      {url && (
                        <DestinationImage url={url} title={destination} />

                        // <Image
                        //   src={url}
                        //   alt={destination}
                        //   width={800}
                        //   height={350}
                        //   quality={50}
                        //   className="rounded-xl shadow-sm max-w-full mx-auto hover:scale-155 duration-300 hover:duration-800 bg-gray-300 object-cover h-[300px]"
                        //   onLoadingComplete={handleImageLoad}
                        // />
                      )}
                    </div>
                  </Link>
                )
              )}
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
                <div>User name</div>
              </div>
            </div>
          </div>
        </div>
        <Link href={`/journey/${id}`}>
          <div className="mt-2 flex justify-between">
            <div className="w-full px-2">
              <div className=" flex flex-wrap justify-between items-center">
                <Link href={`/journey/${id}`}>
                  <span aria-hidden="true" className="absolute_ inset-0"></span>
                  <h2 className="flex gap-2 items-center 2xl:text-lg  mb-0.5 font-medium">
                    {depart} -{''}
                    <span className="text-primary">{destination}</span>
                  </h2>
                </Link>
                <div className="text-end">
                  <NbStart rating={Math.random() * 5} />
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-sm flex items-center gap-2 font-medium">
                  <GiAirplaneDeparture className="hidden" /> Départ le{' '}
                  {`${date_depart}`}
                </p>
                {/* <p className="text-sm opacity-80">
                  {`${tarif} ${devise}/${unite}`}
                </p> */}
              </div>
              <div className="py-1 ">
                <div className="text-xs">
                  <b>Hôte :</b> Wilfried ETEKA
                </div>
                <p className="leading-tight_tracking-tighter hidden opacity-70 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores ea ...
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TrajetItem;
