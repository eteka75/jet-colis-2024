'use client'; // src/components/MultiStepForm.tsx

import React, { useState } from 'react';
import {
  useForm,
  FormProvider,
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { parse, isValid, format } from 'date-fns';
import CalendarInput2 from '@/components/common/ui/CalendarInput2';
import { Textarea } from '@/components/ui/textarea';

const modesTrans = [
  { value: 'voiture', label: 'Voiture' },
  { value: 'avion', label: 'Avion' },
];

// Fonction de validation de format de date
const isValidDateFormat = (value: string) => {
  const date = parse(value, 'dd/MM/yyyy', new Date());
  return isValid(date);
};

// Fonction de validation de date d'arrivée par rapport à la date de départ
const isAfterDepartureDate = (
  arrivalDate: string,
  departureDate: string
): boolean => {
  const dateArrival = parse(arrivalDate, 'dd/MM/yyyy', new Date());
  const dateDeparture = parse(departureDate, 'dd/MM/yyyy', new Date());
  return dateArrival > dateDeparture;
};

// Définir les schémas de validation pour chaque étape avec zod
const stepSchemas = [
  z.object({
    transportType: z.string().min(1, 'Type de transport requis'),
    departurePlace: z.string().min(1, 'Lieu de départ requis'),
    departureDate: z.string().refine((value) => isValidDateFormat(value), {
      message: 'Format de date invalide (dd/MM/yyyy)',
    }),
    arrivalPlace: z.string().min(1, "Lieu d'arrivée requis"),
    arrivalDate: z
      .string()
      .refine((value) => isValidDateFormat(value), {
        message: 'Format de date invalide (dd/MM/yyyy)',
      })
      .refine(
        (value, ctx) => {
          const departureDate = ctx?.parent?.departureDate;
          if (!departureDate) return true;
          return isAfterDepartureDate(value, departureDate);
        },
        {
          message: "La date d'arrivée doit être après la date de départ",
        }
      ),
  }),
  z.object({
    tripName: z
      .string()
      .min(1, 'Nom du trajet requis')
      .max(100, 'Nom du trajet doit avoir au maximum 100 caractères'),
    description: z
      .string()
      .min(1, 'Description requise')
      .max(500, 'Description doit avoir au maximum 500 caractères'),
    allowedPackages: z
      .string()
      .min(1, 'Colis autorisés requis')
      .max(100, 'Colis autorisés doit avoir au maximum 100 caractères'),
  }),
  z.object({}),
];

interface StepProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  methods: UseFormReturn<FieldValues>;
}

const StepOne: React.FC<StepProps> = ({ register, errors, methods }) => {
  const { setValue, getValues } = methods;

  const handleDateChange = (date: Date | null, field: string) => {
    if (date) {
      setValue(field, format(date, 'dd/MM/yyyy'));
    } else {
      setValue(field, '');
    }
  };

  return (
    <>
      <div className="py-4 space-y-2">
        <div>
          <Label>Type de transport *</Label>
          <select
            {...register('transportType')}
            className={cn(
              'flex h-10 w-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
            )}
          >
            <option value={''}>Sélectionnez</option>
            {modesTrans.map((val, index) => (
              <option key={index} value={val.value}>
                {val.label}
              </option>
            ))}
          </select>
          {errors.transportType && (
            <p className="text-red-500">
              {errors.transportType.message as string}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Lieu de départ *</Label>
            <Input {...register('departurePlace')} />
            {errors.departurePlace && (
              <p className="text-red-500">
                {errors.departurePlace.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Date de départ *</Label>
            <CalendarInput2
              value={
                getValues('departureDate')
                  ? new Date(getValues('departureDate'))
                  : null
              }
              onChange={(date) => handleDateChange(date, 'departureDate')}
              onBlur={() => {}}
              name="departureDate"
            />
            {errors.departureDate && (
              <p className="text-red-500">
                {errors.departureDate.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Lieu d'arrivée</Label>
            <Input {...register('arrivalPlace')} />
            {errors.arrivalPlace && (
              <p className="text-red-500">
                {errors.arrivalPlace.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Date d'arrivée</Label>
            <CalendarInput2
              value={
                getValues('arrivalDate')
                  ? new Date(getValues('arrivalDate'))
                  : null
              }
              onChange={(date) => handleDateChange(date, 'arrivalDate')}
              onBlur={() => {}}
              name="arrivalDate"
            />
            {errors.arrivalDate && (
              <p className="text-red-500">
                {errors.arrivalDate.message as string}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const StepTwo: React.FC<StepProps> = ({ register, errors }) => (
  <div className="py-4 space-y-4">
    <div className="form-group">
      <Label>Nom du trajet</Label>
      <Input {...register('tripName')} />
      {errors.tripName && (
        <p className="text-red-500">{errors.tripName.message as string}</p>
      )}
    </div>

    <div className="form-group">
      <Label>Colis autorisés</Label>
      <Input {...register('allowedPackages')} />
      {errors.allowedPackages && (
        <p className="text-red-500">
          {errors.allowedPackages.message as string}
        </p>
      )}
    </div>
    <div className="form-group">
      <Label>Description</Label>
      <Textarea {...register('description')} />
      {errors.description && (
        <p className="text-red-500">{errors.description.message as string}</p>
      )}
    </div>
  </div>
);

const StepThree: React.FC<StepProps> = ({ methods }) => {
  const { getValues } = methods; // Utiliser methods pour obtenir les valeurs du formulaire
  const values = getValues();

  return (
    <div className="py-4 space-y-4">
      <h3>Récapitulatif</h3>
      <p>
        <strong>Type de transport :</strong> {values.transportType}
      </p>
      <p>
        <strong>Lieu de départ :</strong> {values.departurePlace}
      </p>
      <p>
        <strong>Date de départ :</strong> {values.departureDate}
      </p>
      <p>
        <strong>Lieu d'arrivée :</strong> {values.arrivalPlace}
      </p>
      <p>
        <strong>Date d'arrivée :</strong> {values.arrivalDate}
      </p>
      <p>
        <strong>Nom du trajet :</strong> {values.tripName}
      </p>
      <p>
        <strong>Description :</strong> {values.description}
      </p>
      <p>
        <strong>Colis autorisés :</strong> {values.allowedPackages}
      </p>
    </div>
  );
};

const steps = [StepOne, StepTwo, StepThree];

const MultiStepForm: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const currentStep = steps[stepIndex];
  const methods = useForm({
    resolver: zodResolver(stepSchemas[stepIndex]), // Utilisez le schéma de validation de l'étape actuelle
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors },
    register,
  } = methods;

  const nextStep = async () => {
    const valid = await trigger();
    if (valid) {
      setStepIndex(stepIndex + 1);
    }
  };

  const prevStep = () => {
    setStepIndex(stepIndex - 1);
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mb-6">
          <li
            className={`flex items-center ${
              stepIndex === 0
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                stepIndex === 0
                  ? 'border-blue-600 dark:border-blue-500'
                  : 'border-gray-500 dark:border-gray-400'
              } rounded-full shrink-0`}
            >
              1
            </span>
            <span>
              <h3 className="font-medium leading-tight">Détails du trajet</h3>
              <p className="text-sm">Informations sur votre trajet</p>
            </span>
          </li>
          <li
            className={`flex items-center ${
              stepIndex === 1
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                stepIndex === 1
                  ? 'border-blue-600 dark:border-blue-500'
                  : 'border-gray-500 dark:border-gray-400'
              } rounded-full shrink-0`}
            >
              2
            </span>
            <span>
              <h3 className="font-medium leading-tight">
                Description de l'offre
              </h3>
              <p className="text-sm">Description et types de colis</p>
            </span>
          </li>
          <li
            className={`flex items-center ${
              stepIndex === 2
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                stepIndex === 2
                  ? 'border-blue-600 dark:border-blue-500'
                  : 'border-gray-500 dark:border-gray-400'
              } rounded-full shrink-0`}
            >
              3
            </span>
            <span>
              <h3 className="font-medium leading-tight">Récapitulatif</h3>
              <p className="text-sm">Vérifiez et confirmez</p>
            </span>
          </li>
        </ol>
        <div className="text-xs opacity-80">* Indique un champ obligatoire</div>

        {React.createElement(currentStep, { register, errors, methods })}
        <div className="flex justify-end space-x-4">
          {stepIndex > 0 && (
            <Button
              variant={'ghost'}
              className="border"
              onClick={prevStep}
              type="button"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>
          )}
          {stepIndex < steps.length - 1 && (
            <Button onClick={nextStep} type="button">
              Suivant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
          {stepIndex === steps.length - 1 && (
            <Button type="submit">
              Soumettre
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
