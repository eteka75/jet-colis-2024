'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import clsx from 'clsx';

const SubNav = () => {
  const villesArray: string[] = [
    'A la une',
    'Paris',
    'Liverpool',
    'Rouen',
    'Montpellier',
    'Marseille',
    'Parakou',
    'Bohicon',
    'Washington',
    'Canada',
    'Sénégal',
    'Niger',
    'Mali',
    'Gabon',
    'Caméroon',
    "Côte-d'îvoire",
    'London',
    'Natitingou',
    'Lille',
    'New York',
    'Moscou',
    'Libreville',
    'Cotonou',
  ];
  const villes = Array.from(new Set(villesArray));

  const ville_active = 'A la une';
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, villes.length - 1));
  };

  return (
    <div className="bg-white shadow-sm z-0 dark:border-b dark:bg-background/80 bg-opacity-90 backdrop-blur-3xl">
      <div className="container-fluid max-w-full">
        <nav className="md:mx-12 me-12">
          <Carousel
            opts={{
              align: 'center',
              loop: false,
              dragFree: false,
              slidesToScroll: 1,
            }}
            className="px-0"
          >
            <CarouselContent className="font-medium ms-1 items-center">
              {villes.map((ville, index) => (
                <CarouselItem
                  className={clsx(
                    'basis-auto text-nowrap px-3  py-3 md:py-4 mx-1 _rounded-full transition-colors duration-300',
                    ville_active === ville
                      ? 'border-primary border-b border-3'
                      : 'hover:border-b-primary border-3 hover:border-b'
                  )}
                  key={index}
                >
                  <Link href={`/travel-destination/${index}`}>{ville}</Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* {currentIndex > 0 && <CarouselPrevious onClick={handlePrevious} />}
            {currentIndex < villes.length - 1 && (
              <CarouselNext onClick={handleNext} />
            )} */}
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </nav>
      </div>
    </div>
  );
};

export default SubNav;
