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
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const StepOneSchema = z.object({
  transportType: z.string().min(1, 'Type de transport requis'),
  departurePlace: z.string().min(1, 'Lieu de départ requis'),
  departureDate: z.string().min(1, 'Date de départ requise'),
  arrivalPlace: z.string().min(1, "Lieu d'arrivée requis"),
  arrivalDate: z.string().min(1, "Date d'arrivée requise"),
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
          <Input {...register('departurePlace')} />
          {errors.departurePlace && (
            <p className="text-red-500 text-xs">
              {errors.departurePlace.message}
            </p>
          )}
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
          <Input {...register('arrivalPlace')} />
          {errors.arrivalPlace && (
            <p className="text-red-500 text-xs">
              {errors.arrivalPlace.message}
            </p>
          )}
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
      <div className="md:flex md:justify-between pt-2">
        <Link href="/">
          <Button variant={'outline'}>
            {' '}
            <ChevronLeft className="h-5 w-5" />
            Annuler
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
