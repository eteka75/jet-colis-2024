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

const SubNav = ({ type }: { type: string }) => {
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
  const classContainer =
    type === 'mini'
      ? 'container-mini'
      : type === 'large'
      ? 'container-fluid'
      : 'container';
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, villes.length - 1));
  };

  return (
    <div className="bg-white  shadow-sm_ shadow-sms text-light z-0  dark:bg-background _bg-opacity-90_backdrop-blur-3xl">
      <div className={classContainer}>
        <nav className="md:px-12 dark:border-b ">
          <Carousel
            opts={{
              align: 'center',
              loop: false,
              dragFree: false,
              slidesToScroll: 1,
            }}
            className="px-0"
          >
            <CarouselContent className="font-normal ms-1 items-center">
              {villes.map((ville, index) => (
                <CarouselItem
                  className={clsx(
                    'basis-auto text-nowrap md:px-3 px-2 border-b-4 border-b-white/0   py-2 md:pt-3 md:pb-2 md:mx-1 _rounded-full transition-colors duration-300',
                    ville_active === ville
                      ? 'border-b-4 font-medium border-b-primary'
                      : 'hover:border-b-primary  hover:border-b-4'
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </nav>
      </div>
    </div>
  );
};

export default SubNav;
