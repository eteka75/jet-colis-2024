import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { format, parse } from 'date-fns';
import { z } from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import CalendarInput2 from '@/components/common/ui/CalendarInput2';
import { modesTrans } from '@/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, MapPin, X } from 'lucide-react';
import { IoLocate } from 'react-icons/io5';

export const StepOneSchema = z.object({
  transportType: z.string().min(1).max(100, 'Type de transport requis'),
  departurePlace: z.string().min(1).max(100, 'Lieu de départ requis'),
  departureDate: z.string().min(1).max(30, 'Date de départ requise'),
  arrivalPlace: z.string().min(1).max(100, "Lieu d'arrivée requis"),
  arrivalDate: z.string().min(1).max(30, "Date d'arrivée requise"),
});

export type StepOneData = z.infer<typeof StepOneSchema>;

interface StepOneProps {
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({ onNext }) => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    trigger,
    setError,
    clearErrors,
  } = useFormContext<StepOneData>();
  const [msgError, setMsgError] = useState('');
  const handleDateChange = (date: Date | null, field: keyof StepOneData) => {
    if (date) {
      setValue(field, format(date, 'dd/MM/yyyy'), { shouldValidate: true });
    } else {
      setValue(field, '', { shouldValidate: true });
    }
  };

  const validateDates = (): boolean => {
    const departureDateStr = getValues('departureDate');
    const arrivalDateStr = getValues('arrivalDate');

    if (!departureDateStr || !arrivalDateStr) {
      return false;
    }

    const departureDate = parse(departureDateStr, 'dd/MM/yyyy', new Date());
    const arrivalDate = parse(arrivalDateStr, 'dd/MM/yyyy', new Date());

    if (arrivalDate < departureDate) {
      setMsgError(
        "La date d'arrivée doit être supérieure ou égale à la date de départ"
      );
      return false;
    }

    clearErrors('arrivalDate'); // Clear error if validation is successful
    return true;
  };

  const handleSubmitStepOne = async () => {
    const valid = await trigger(); // Triggers validation for all fields
    if (!valid) return;

    if (validateDates()) {
      onNext();
    }
  };

  const handleMoyenTransportChange = (value: string) => {
    if (value) {
      setValue('transportType', value);
      clearErrors('transportType'); // Efface les erreurs pour le champ 'transportType'
    }
  };

  return (
    <div className="py-4 space-y-2">
      <div>
        <Label>Moyen de transport *</Label>
        <Select
          {...register('transportType')}
          onValueChange={handleMoyenTransportChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {modesTrans.map((val, index) => (
                <SelectItem key={index} value={val.value}>
                  {val.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {errors.transportType && (
          <p className="text-red-500 text-xs">{errors.transportType.message}</p>
        )}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <Label>Lieu de départ *</Label>
          <div className=" grid gap-2">
            <div className="relative">
              <Input
                {...register('departurePlace')}
                className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.departurePlace ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Cotonou"
              />
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 dark:peer-focus:text-white dark:text-white/70 opacity-70 peer-focus:text-gray-900" />
            </div>
            {errors.departurePlace && (
              <p className="text-red-500 text-xs">
                {errors.departurePlace.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label>Date de départ *</Label>
          <CalendarInput2
            value={
              getValues('departureDate')
                ? parse(getValues('departureDate'), 'dd/MM/yyyy', new Date())
                : null
            }
            onChange={(date) => handleDateChange(date, 'departureDate')}
            name="departureDate"
            dateFormat="dd/MM/yyyy"
          />
          {errors.departureDate && (
            <p className="text-red-500 text-xs">
              {errors.departureDate.message}
            </p>
          )}
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <Label>Lieu d'arrivée *</Label>
          <div className=" grid gap-2">
            <div className="relative">
              <Input
                {...register('arrivalPlace')}
                className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.arrivalPlace ? 'border-red-500' : 'border-gray-200'
                }`}
                placeholder="Paris"
              />
              <MapPin className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 dark:peer-focus:text-white dark:text-white/70 opacity-70 peer-focus:text-gray-900" />
            </div>
            {errors.arrivalPlace && (
              <p className="text-red-500 text-xs">
                {errors.arrivalPlace.message}
              </p>
            )}
          </div>
        </div>
        <div>
          <Label>Date d'arrivée *</Label>
          <CalendarInput2
            value={
              getValues('arrivalDate')
                ? parse(getValues('arrivalDate'), 'dd/MM/yyyy', new Date())
                : null
            }
            onChange={(date) => handleDateChange(date, 'arrivalDate')}
            name="arrivalDate"
            dateFormat="dd/MM/yyyy"
          />
          {errors.arrivalDate && (
            <p className="text-red-500 text-xs">{errors.arrivalDate.message}</p>
          )}
        </div>
      </div>
      {msgError && <div className="text-xs text-red-500">{msgError}</div>}
      <div className="flex gap-2 justify-between pt-2">
        <Link href="/">
          <Button
            variant={'link'}
            className="border text-foreground opacity-60 hover:opacity-100"
          >
            {' '}
            <X className="h-5 w-5" />
            Quitter
          </Button>
        </Link>
        <Button onClick={handleSubmitStepOne}>
          Suivant <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
