'use client'; // src/components/MultiStepForm.tsx
import React, { useState } from 'react';
import Select from 'react-select';
import {
  useForm,
  FormProvider,
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Controller,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import CalendarInput from '@/components/common/ui/CalendarInput';
import CalendarInput2 from '@/components/common/ui/CalendarInput2';
import { cn } from '@/src/lib/utils';
import TopSteps from './TopSteps';

const modesTrans = [
  { value: 'voiture', label: 'Voiture' },
  { value: 'avion', label: 'Avion' },
];
// Fonction de validation de format de date
const isValidDateFormat = (value: string) => {
  const dateFormatRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateFormatRegex.test(value)) {
    return false;
  }
};

// Fonction de validation de date d'arrivée par rapport à la date de départ
function isAfterDepartureDate(
  arrivalDate: string,
  departureDate: string
): boolean {
  const [ddArrival, mmArrival, yyyyArrival] = arrivalDate.split('/');
  const [ddDeparture, mmDeparture, yyyyDeparture] = departureDate.split('/');

  const arrivalTimestamp = new Date(
    `${yyyyArrival}-${mmArrival}-${ddArrival}`
  ).getTime();
  const departureTimestamp = new Date(
    `${yyyyDeparture}-${mmDeparture}-${ddDeparture}`
  ).getTime();

  return arrivalTimestamp > departureTimestamp;
}

// Définir les schémas de validation pour chaque étape avec zod
const stepSchemas = [
  z.object({
    transportType: z.string().min(1, 'Type de transport requis'),
    departurePlace: z.string().min(1, 'Lieu de départ requis'),
    departureDate: z.string().refine((value) => isValidDateFormat(value), {
      message: 'Format de date invalide (dd/MM/yyyy)',
    }),
    arrivalPlace: z.string().min(1, "Lieu d'arrivée requis"),
    arrivalDate: z.string().refine((value) => isValidDateFormat(value), {
      message: 'Format de date invalide (dd/MM/yyyy)',
    }),
  }),
  z.object({
    tripName: z
      .string()
      .min(1, 'Nom du trajet requis')
      .max(100, 'Nom du trajet doit avoir au maximum 100 caractères'),
    description: z
      .string()
      .min(1, 'Description requise')
      .max(100, 'Description doit avoir au maximum 100 caractères'),
    allowedPackages: z
      .string()
      .min(1, 'Colis autorisés requis')
      .max(100, 'Colis autorisés doit avoir au maximum 100 caractères'),
  }),
  z.object({}), // Schema pour l'étape 3 (vide)
];

const globalSchema = z.object({
  transportType: z.string().min(1, 'Type de transport requis'),
  departurePlace: z.string().min(1, 'Lieu de départ requis'),
  departureDate: z.string().refine((value) => isValidDateFormat(value), {
    message: 'Format de date invalide (dd/MM/yyyy)',
  }),
  arrivalPlace: z.string().min(1, "Lieu d'arrivée requis"),
  arrivalDate: z.string().refine((value) => isValidDateFormat(value), {
    message: 'Format de date invalide (dd/MM/yyyy)',
  }),
  tripName: z
    .string()
    .min(1, 'Nom du trajet requis')
    .max(100, 'Nom du trajet doit avoir au maximum 100 caractères'),
  description: z
    .string()
    .min(1, 'Description requise')
    .max(100, 'Description doit avoir au maximum 100 caractères'),
  allowedPackages: z
    .string()
    .min(1, 'Colis autorisés requis')
    .max(100, 'Colis autorisés doit avoir au maximum 100 caractères'),
});

interface StepProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  control: any;
}
const StepOne: React.FC<StepProps> = ({ register, errors, control }) => (
  <div className="py-4 space-y-4">
    <div className="grid grid-cols-2">
      <div className="text-xs text-muted">* Indique un champ obligatoire</div>
      <div>
        <Label>Type de transport *</Label>
        <Controller
          name="transportType"
          control={control}
          render={({ field }) => (
            <select
              {...field}
              className={cn(
                'flex h-10 w-full px-4 rounded-md border border-input bg-background  py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              )}
            >
              <option value={''}>Sélectionnez</option>
              {modesTrans.map((val, index) => (
                <option value={val.value}>{val.label}</option>
              ))}
            </select>
          )}
        />
        {errors.transportType && (
          <p className="text-red-500">
            {errors.transportType.message as string}
          </p>
        )}
      </div>
      <div></div>
    </div>
    <div className="md:grid md:grid-cols-2 gap-4">
      <div>
        <Label>Lieu de départ</Label>
        <Controller
          name="departurePlace"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.departurePlace && (
          <p className="text-red-500">
            {errors.departurePlace.message as string}
          </p>
        )}
      </div>
      <div>
        <Label>Date de départ</Label>
        <Controller
          name="departureDate"
          control={control}
          render={({ field }) => <CalendarInput2 {...field} />}
        />
        {errors.departureDate && (
          <p className="text-red-500">
            {errors.departureDate.message as string}
          </p>
        )}
      </div>
    </div>
    <div className="md:grid md:grid-cols-2 gap-4">
      <div>
        <Label>Lieu d'arrivée</Label>
        <Controller
          name="arrivalPlace"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
        {errors.arrivalPlace && (
          <p className="text-red-500">
            {errors.arrivalPlace.message as string}
          </p>
        )}
      </div>
      <div>
        <Label>Date d'arrivée</Label>
        <Controller
          name="arrivalDate"
          control={control}
          render={({ field }) => (
            <CalendarInput2 dateFormat="dd/MM/yyyy" {...field} />
          )}
        />
        {errors.arrivalDate && (
          <p className="text-red-500">{errors.arrivalDate.message as string}</p>
        )}
      </div>
    </div>
  </div>
);

const StepTwo: React.FC<StepProps> = ({ register, errors, control }) => (
  <div className="py-4 space-y-4">
    <div className="form-group">
      <Label>Nom du trajet</Label>
      <Controller
        name="tripName"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      {errors.tripName && (
        <p className="text-red-500">{errors.tripName.message as string}</p>
      )}
    </div>
    <div className="form-group">
      <Label>Description</Label>
      <Controller
        name="description"
        control={control}
        render={({ field }) => <textarea {...field} className="input" />}
      />
      {errors.description && (
        <p className="text-red-500">{errors.description.message as string}</p>
      )}
    </div>
    <div className="form-group">
      <Label>Colis autorisés</Label>
      <Controller
        name="allowedPackages"
        control={control}
        render={({ field }) => <textarea {...field} className="input" />}
      />
      {errors.allowedPackages && (
        <p className="text-red-500">
          {errors.allowedPackages.message as string}
        </p>
      )}
    </div>
  </div>
);

const StepThree: React.FC<StepProps> = ({ register, errors, control }) => {
  const { getValues } = useForm();
  const values = getValues();

  return (
    <div className="py-4">
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
  const [step, setStep] = useState(0);
  const methods = useForm({
    resolver: zodResolver(globalSchema),
    mode: 'onChange',
  });

  const {
    trigger,
    formState: { errors, isValid },
    control,
    getValues,
  } = methods;

  const validateCurrentStep = async () => {
    const currentSchema = stepSchemas[step];
    const result = await currentSchema.safeParseAsync(methods.getValues());
    return result.success;
  };

  const onNext = async () => {
    const isStepValid = await validateCurrentStep();
    if (isStepValid) {
      setStep((prevStep) => prevStep + 1);
    } else {
      await trigger();
    }
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  const StepComponent = steps[step];

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <TopSteps stepIndex={step} />
        <div className="mx-1">
          <StepComponent
            register={methods.register}
            errors={errors}
            control={control}
          />
          <div className="py-4 flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between">
            {step > 0 ? (
              <Button
                variant={'ghost'}
                className="border"
                type="button"
                onClick={() => setStep((prevStep) => prevStep - 1)}
              >
                <ArrowLeft size={18} /> Retour
              </Button>
            ) : (
              <div></div>
            )}
            {step < steps.length - 1 ? (
              <Button type="button" onClick={onNext}>
                Suivant <ArrowRight size={18} />
              </Button>
            ) : (
              <Button type="submit" disabled={!isValid}>
                Envoyer
              </Button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
