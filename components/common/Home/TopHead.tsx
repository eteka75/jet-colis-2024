import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import sendColis from '@/public/assets/svg/sencolis_paying_game.svg';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CalendarInput from '../ui/CalendarInput';
import TypesColisSelector from '../ui/TypesColisSelector';
import CountrySelector from '../ui/CountrySelector copy';
import Link from 'next/link';
import { FaArrowRight, FaPlus } from 'react-icons/fa6';

const TopHead = () => {
  return (
    <div className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl text-center md:text-start md:text-5xl lg:text-5xl font-serif text-slate-700 font-medium py-8">
              Envoyez vos colis rapidement et en toute sécurité avec{' '}
              <span className="font-bold text-emerald-600 font-sans">
                Colistify
              </span>
            </h1>
            <h3 className="text-lg md:text-xl text-center md:text-start text-gray-600">
              Avec Colistify, envoyez vos colis à l'international dans plus de
              10 destinations et sans frais cachés. Recevez des colis oubliés en
              toute sécurité grâce à des options de livraison pratiques.
            </h3>
            <div className="py-8 flex flex-wrap gap-4 text-center md:text-start">
              <Link href="/send">
                <Button
                  size={'lg'}
                  variant={'primary'}
                  className="shadow flex gap-3 py-6"
                >
                  Offrir des services <FaArrowRight />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size={'lg'}
                  variant={'outline'}
                  className=" shadow py-6 flex gap-3"
                >
                  En savoir plus <FaPlus />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0">
              <Image
                src={sendColis}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="Background Image"
                className="opacity-80  "
              />
            </div>
            <div className="relative hidden z-10 h-full flex_ items-center justify-center">
              <Card className="w-full max-w-md mx-auto pt-4 rounded-2xl">
                <CardContent>
                  <form>
                    <div className="w-full py-2">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="departure-date">Date de départ</Label>
                        <CalendarInput />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5 py-2">
                        <Label htmlFor="departure-country">
                          Pays de départ
                        </Label>
                        <CountrySelector />
                      </div>
                      <div className="flex flex-col space-y-1.5 py-2">
                        <Label htmlFor="destination-country">
                          Pays de destination
                        </Label>
                        <CountrySelector />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-3 w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="package-type">Type de colis</Label>
                        <TypesColisSelector />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="weight">Poids</Label>
                        <div className="flex gap-3 items-center">
                          <Input
                            type="number"
                            min={1}
                            max={20}
                            size={2}
                            id="weight"
                            placeholder="2"
                          />
                          <span>Kg</span>
                        </div>
                      </div>
                    </div>
                  </form>
                  <Button
                    size={'lg'}
                    variant={'primary'}
                    className="w-full mt-2"
                  >
                    Trouver un Partenaires..
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHead;
