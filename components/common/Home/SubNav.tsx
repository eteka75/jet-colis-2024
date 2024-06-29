'use client';
import React from 'react';
import Link from 'next/link';
import { GrMapLocation } from 'react-icons/gr';
import { HiOutlineMapPin } from 'react-icons/hi2';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const SubNav = () => {
  const villes: string[] = [
    'A la une',
    'Paris',
    'Liverpool',
    'Rouen',
    'Monpelier',
    'Marseille',
    'Parakou',
    'Bohicon',
    'London',
    'Natitingou',
    'Lille',
    'New York',
    'New York',
    'Moscou',
    'Libreville',
    'Cotonou',
  ];
  return (
    <div className="bg-white dark:bg-secondary/80">
      <div className="container-fluid  max-w-full ">
        <nav className="py-4 mx-12">
          <Carousel
            opts={{
              align: 'center',
              loop: false,
            }}
            className={'px-0'}
          >
            <CarouselContent className="space-x-4 font-medium">
              {villes.map((ville, index) => (
                <CarouselItem className="basis-auto text-nowrap" key={index}>
                  <Link href={'/travel-to/' + index}>{ville}</Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </nav>
      </div>
    </div>
  );
};

export default SubNav;
