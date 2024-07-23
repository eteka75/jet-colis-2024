'use client'; // src/components/MultiStepForm.tsx

import React, { useState, useEffect } from 'react';
import {
  useForm,
  FormProvider,
  UseFormRegister,
  FieldErrors,
  UseFormReturn,
  useFormContext, // Importer useFormContext
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { parse, isValid, format } from 'date-fns';
import CalendarInput2 from '@/components/common/ui/CalendarInput2';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import TopSteps from './TopSteps';
import clsx from 'clsx';

const getErrorMessage = (error: any) => {
  if (error && typeof error.message === 'string') {
    return error.message;
  }
  return null;
};

// Définir le type spécifique du formulaire
interface FormData {
  transportType: string;
  departurePlace: string;
  departureDate: string;
  arrivalPlace: string;
  arrivalDate: string;
  tripName: string;
  description: string;
  totalKilograms: number;
  packages: {
    type: string;
    kilograms: number;
  }[];
}

// Les options pour le transport et les types de colis
const modesTrans = [
  { value: 'voiture', label: 'Voiture' },
  { value: 'avion', label: 'Avion' },
];

const packageTypes = [
  { value: 'electroniques', label: 'Produits Electroniques' },
  { value: 'cosmetiques', label: 'Produits Cosmétiques' },
  { value: 'alimentaires', label: 'Produits Alimentaires' },
];

// Fonctions de validation des dates
const isValidDateFormat = (value: string) => {
  const date = parse(value, 'dd/MM/yyyy', new Date());
  return isValid(date);
};

const isAfterDepartureDate = (
  arrivalDate: string,
  departureDate: string
): boolean => {
  const dateArrival = parse(arrivalDate, 'dd/MM/yyyy', new Date());
  const dateDeparture = parse(departureDate, 'dd/MM/yyyy', new Date());
  return dateArrival > dateDeparture;
};

// Schémas de validation pour chaque étape du formulaire
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
      .max(500, 'Description doit avoir au maximum 500 caractères'),
    totalKilograms: z.number().min(1, 'Nombre total de kilogrammes requis'),
    packages: z.array(
      z.object({
        type: z.string().min(1, 'Type de colis requis'),
        kilograms: z.number().min(1, 'Nombre de kilogrammes requis'),
      })
    ),
  }),
  z.object({}),
];

// Propriétés des étapes du formulaire
interface StepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  methods: UseFormReturn<FormData>;
  validateStepTwo?: () => boolean;
}

// Étape 1 du formulaire
const StepOne: React.FC<StepProps> = ({ register, errors, methods }) => {
  const { setValue, getValues } = methods;

  const handleDateChange = (date: Date | null, field: string) => {
    if (date) {
      setValue(field as keyof FormData, format(date, 'dd/MM/yyyy'));
    } else {
      setValue(field as keyof FormData, '');
    }
  };

  return (
    <>
      <div className="py-4 space-y-2">
        <div>
          <Label>Moyen de transport *</Label>
          <select
            {...register('transportType')}
            className={cn(
              'flex h-10 w-full md:w-auto rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
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
            <p className="text-red-500 text-xs">
              {errors.transportType.message as string}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <Label>Lieu de départ *</Label>
            <Input {...register('departurePlace')} />
            {errors.departurePlace && (
              <p className="text-red-500 text-xs">
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
              dateFormat="dd/MM/yyyy" // Ajout du format de date ici
            />
            {errors.departureDate && (
              <p className="text-red-500 text-xs">
                {errors.departureDate.message as string}
              </p>
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div>
            <Label>Lieu d'arrivée*</Label>
            <Input {...register('arrivalPlace')} />
            {errors.arrivalPlace && (
              <p className="text-red-500 text-xs">
                {errors.arrivalPlace.message as string}
              </p>
            )}
          </div>

          <div>
            <Label>Date d'arrivée*</Label>
            <CalendarInput2
              value={
                getValues('arrivalDate')
                  ? new Date(getValues('arrivalDate'))
                  : null
              }
              onChange={(date) => handleDateChange(date, 'arrivalDate')}
              onBlur={() => {}}
              name="arrivalDate"
              dateFormat="dd/MM/yyyy" // Ajout du format de date ici
            />
            {errors.arrivalDate && (
              <p className="text-red-500 text-xs">
                {errors.arrivalDate.message as string}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

// Étape 2 du formulaire
const StepTwo: React.FC<StepProps> = ({
  register,
  errors,
  methods,
  validateStepTwo,
}) => {
  const [packages, setPackages] = useState<
    { type: string; kilograms: number }[]
  >([{ type: '', kilograms: 0 }]);
  const { setValue, getValues, trigger, watch } = methods;

  const totalKilograms = watch('totalKilograms', 0);
  const sumOfPackages = packages.reduce((sum, pkg) => sum + pkg.kilograms, 0);
  const remainingKilograms = totalKilograms - sumOfPackages;

  // Fonction pour ajouter un colis
  const addPackage = () => {
    if (packages.length > 0 && packages[packages.length - 1].kilograms > 0) {
      if (packages.length < 5 && remainingKilograms > 0) {
        const newPackages = [...packages, { type: '', kilograms: 0 }];
        setPackages(newPackages);
        setValue('packages', newPackages);
      }
    }
  };

  // Fonction pour retirer un colis
  const removePackage = (index: number) => {
    const newPackages = packages.filter((_, i) => i !== index);
    setPackages(newPackages);
    setValue('packages', newPackages);
  };

  const handlePackageChange = (index: number, key: string, value: any) => {
    const newPackages = packages.map((pkg, i) =>
      i === index ? { ...pkg, [key]: value } : pkg
    );
    setPackages(newPackages);
    setValue('packages', newPackages);
  };

  const handlePackageBlur = () => {
    trigger('packages');
  };

  return (
    <>
      <div className="py-4 space-y-2">
        <div>
          <Label>Nom du trajet *</Label>
          <Input {...register('tripName')} />
          {errors.tripName && (
            <p className="text-red-500 text-xs">
              {errors.tripName.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Description *</Label>
          <Textarea {...register('description')} />
          {errors.description && (
            <p className="text-red-500 text-xs">
              {errors.description.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Nombre total de kilogrammes *</Label>
          <Input
            type="number"
            {...register('totalKilograms', { valueAsNumber: true })}
          />
          {errors.totalKilograms && (
            <p className="text-red-500 text-xs">
              {errors.totalKilograms.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Colis *</Label>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="border p-2 rounded-md mb-2 flex flex-col space-y-2"
            >
              <div>
                <Label>Type de colis *</Label>
                <Select
                  value={pkg.type}
                  onValueChange={(value) =>
                    handlePackageChange(index, 'type', value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {packageTypes.map((pkgType) => (
                        <SelectItem key={pkgType.value} value={pkgType.value}>
                          {pkgType.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {errors.packages &&
                  errors.packages[index]?.type &&
                  getErrorMessage(errors.packages[index]?.type) && (
                    <p className="text-red-500 text-xs">
                      {getErrorMessage(errors.packages[index]?.type)}
                    </p>
                  )}
              </div>
              <div>
                <Label>Kilogrammes *</Label>
                <Input
                  type="number"
                  value={pkg.kilograms}
                  onChange={(e) =>
                    handlePackageChange(
                      index,
                      'kilograms',
                      parseFloat(e.target.value)
                    )
                  }
                  onBlur={handlePackageBlur}
                />
                {errors.packages && errors.packages[index]?.kilograms && (
                  <p className="text-red-500 text-xs">
                    {errors.packages[index]?.kilograms?.message as string}
                  </p>
                )}
              </div>
              <div className="flex justify-end">
                <Button
                  type="button"
                  onClick={() => removePackage(index)}
                  variant="outline"
                  size="sm"
                >
                  <Minus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <Button type="button" onClick={addPackage} variant="outline">
              <Plus className="w-4 h-4" />
              Ajouter un colis
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

// Étape 3 du formulaire
const StepThree: React.FC<StepProps> = ({ register, errors, methods }) => {
  const { getValues } = useFormContext<FormData>(); // Utiliser useFormContext

  useEffect(() => {
    console.log('Values:', getValues());
  }, []);

  return (
    <>
      <div className="py-4 space-y-2">
        <div>
          <Label>Moyen de transport *</Label>
          <Input
            value={getValues('transportType')}
            {...register('transportType')}
          />
          {errors.transportType && (
            <p className="text-red-500 text-xs">
              {errors.transportType.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Lieu de départ *</Label>
          <Input
            value={getValues('departurePlace')}
            {...register('departurePlace')}
          />
          {errors.departurePlace && (
            <p className="text-red-500 text-xs">
              {errors.departurePlace.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Date de départ *</Label>
          <Input
            value={getValues('departureDate')}
            {...register('departureDate')}
          />
          {errors.departureDate && (
            <p className="text-red-500 text-xs">
              {errors.departureDate.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Lieu d'arrivée *</Label>
          <Input
            value={getValues('arrivalPlace')}
            {...register('arrivalPlace')}
          />
          {errors.arrivalPlace && (
            <p className="text-red-500 text-xs">
              {errors.arrivalPlace.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Date d'arrivée *</Label>
          <Input
            value={getValues('arrivalDate')}
            {...register('arrivalDate')}
          />
          {errors.arrivalDate && (
            <p className="text-red-500 text-xs">
              {errors.arrivalDate.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Nom du trajet *</Label>
          <Input value={getValues('tripName')} {...register('tripName')} />
          {errors.tripName && (
            <p className="text-red-500 text-xs">
              {errors.tripName.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Description *</Label>
          <Textarea
            value={getValues('description')}
            {...register('description')}
          />
          {errors.description && (
            <p className="text-red-500 text-xs">
              {errors.description.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Nombre total de kilogrammes *</Label>
          <Input
            type="number"
            value={getValues('totalKilograms').toString()}
            {...register('totalKilograms', { valueAsNumber: true })}
          />
          {errors.totalKilograms && (
            <p className="text-red-500 text-xs">
              {errors.totalKilograms.message as string}
            </p>
          )}
        </div>
        <div>
          <Label>Colis *</Label>
          {getValues('packages').map((pkg, index) => (
            <div key={index} className="border p-2 rounded-md mb-2">
              <div>
                <Label>Type de colis *</Label>
                <Input
                  value={pkg.type}
                  {...register(`packages.${index}.type`)}
                />

                {errors.packages &&
                  errors.packages[index]?.type &&
                  getErrorMessage(errors.packages[index]?.type) && (
                    <p className="text-red-500 text-xs">
                      {getErrorMessage(errors.packages[index]?.type)}
                    </p>
                  )}
              </div>
              <div>
                <Label>Kilogrammes *</Label>
                <Input
                  type="number"
                  value={pkg.kilograms.toString()}
                  {...register(`packages.${index}.kilograms`, {
                    valueAsNumber: true,
                  })}
                />
                {errors.packages &&
                  errors.packages[index]?.type &&
                  getErrorMessage(errors.packages[index]?.type) && (
                    <p className="text-red-500 text-xs">
                      {getErrorMessage(errors.packages[index]?.type)}
                    </p>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Composant principal du formulaire multi-étapes
const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);

  // Configurer les méthodes du formulaire
  const methods = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(stepSchemas[step]),
    defaultValues: {
      transportType: '',
      departurePlace: '',
      departureDate: '',
      arrivalPlace: '',
      arrivalDate: '',
      tripName: '',
      description: '',
      totalKilograms: 0,
      packages: [{ type: '', kilograms: 0 }],
    },
  });

  const {
    handleSubmit,
    trigger,
    formState: { errors, isValid },
    register,
    getValues,
    setValue,
  } = methods;

  // Fonction pour valider la deuxième étape du formulaire
  const validateStepTwo = () => {
    const packages = getValues('packages');
    const totalKilograms = getValues('totalKilograms');
    const sumOfPackages = packages.reduce((sum, pkg) => sum + pkg.kilograms, 0);

    if (sumOfPackages > totalKilograms) {
      alert(
        `La somme des kilogrammes des colis (${sumOfPackages} kg) ne doit pas dépasser le nombre total de kilogrammes (${totalKilograms} kg).`
      );
      return false;
    }

    return true;
  };

  const onSubmit = (data: FormData) => {
    if (step === 1 && !validateStepTwo()) {
      return;
    }

    if (step === 2) {
      console.log('Formulaire soumis :', data);
    } else {
      setStep(step + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-4">
          {step === 0 && (
            <StepOne register={register} errors={errors} methods={methods} />
          )}
          {step === 1 && (
            <StepTwo register={register} errors={errors} methods={methods} />
          )}
          {step === 2 && (
            <StepThree register={register} errors={errors} methods={methods} />
          )}

          <div className="flex justify-between">
            {step > 0 && (
              <Button type="button" onClick={() => setStep(step - 1)}>
                Précédent
              </Button>
            )}
            <Button type="submit">
              {step === 2 ? 'Soumettre' : 'Suivant'}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
