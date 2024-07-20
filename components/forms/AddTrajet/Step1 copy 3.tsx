'use client'; // src/components/MultiStepForm.tsx
import React, { useState, useEffect } from 'react';
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
    totalKilograms: z.number().min(1, 'Nombre total de kilogrammes requis'),
    packages: z
      .array(
        z.object({
          type: z.string().min(1, 'Type de colis requis'),
          kilograms: z.number().min(1, 'Nombre de kilogrammes requis'),
        })
      )
      .refine(
        (packages, ctx) => {
          const totalKilograms = ctx?.parent?.totalKilograms ?? 0;
          const sumOfPackages = packages.reduce(
            (sum, pkg) => sum + pkg.kilograms,
            0
          );
          return sumOfPackages <= totalKilograms;
        },
        {
          message:
            'Le total des kilogrammes des colis dépasse le nombre total de kilogrammes disponibles',
        }
      ),
  }),
  z.object({}),
];

// Propriétés des étapes du formulaire
interface StepProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  methods: UseFormReturn<FormData>;
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
            <Label>Lieu d'arrivée</Label>
            <Input {...register('arrivalPlace')} />
            {errors.arrivalPlace && (
              <p className="text-red-500 text-xs">
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
const StepTwo: React.FC<StepProps> = ({ register, errors, methods }) => {
  const [packages, setPackages] = useState<
    { type: string; kilograms: number }[]
  >([{ type: '', kilograms: 0 }]);
  const { setValue, getValues, trigger, watch } = methods;

  const addPackage = () => {
    if (
      packages.length < 5 &&
      packages[packages.length - 1].kilograms > 0 &&
      packages[packages.length - 1].type
    ) {
      setPackages([...packages, { type: '', kilograms: 0 }]);
      setValue('packages', [...packages, { type: '', kilograms: 0 }]);
    }
  };

  const removePackage = (index: number) => {
    const updatedPackages = packages.filter((_, i) => i !== index);
    setPackages(updatedPackages);
    setValue('packages', updatedPackages);
  };

  const handlePackageChange = (
    index: number,
    field: 'type' | 'kilograms',
    value: string | number
  ) => {
    const updatedPackages = [...packages];
    updatedPackages[index] = { ...updatedPackages[index], [field]: value };
    setPackages(updatedPackages);
    setValue('packages', updatedPackages);
    trigger('packages');
  };

  // Calculer le total des kilogrammes
  const totalKilograms = watch('totalKilograms', 0);

  useEffect(() => {
    // Déclencher la validation lorsque le totalKilograms change
    trigger('packages');
  }, [totalKilograms, trigger]);

  return (
    <div className="py-4 space-y-4">
      <div className="form-group">
        <Label>Nom du trajet</Label>
        <Input {...register('tripName')} />
        {errors.tripName && (
          <p className="text-red-500 text-xs">
            {errors.tripName.message as string}
          </p>
        )}
      </div>
      <div className="form-group">
        <Label>Description</Label>
        <Textarea {...register('description')} />
        {errors.description && (
          <p className="text-red-500 text-xs">
            {errors.description.message as string}
          </p>
        )}
      </div>
      <div className="form-group">
        <Label>Nombre total de kilogrammes</Label>
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
      <div className="form-group">
        <Label>Colis</Label>
        {packages.map((pkg, index) => (
          <div key={index} className="flex space-x-4 mb-2">
            <Select
              onValueChange={(value) =>
                handlePackageChange(index, 'type', value)
              }
              value={pkg.type}
            >
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Type de colis" />
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
            <Input
              type="number"
              placeholder="Kg"
              value={pkg.kilograms}
              min={1}
              onChange={(e) =>
                handlePackageChange(index, 'kilograms', Number(e.target.value))
              }
            />
            <Button
              type="button"
              onClick={() => removePackage(index)}
              className="ml-2"
              disabled={packages.length === 1} // Désactive le bouton "Moins" pour la première ligne
            >
              <Minus size={16} />
            </Button>
            {index === packages.length - 1 && packages.length < 5 && (
              <Button type="button" onClick={addPackage} className="ml-2">
                <Plus size={16} />
              </Button>
            )}
          </div>
        ))}
        {errors.packages && (
          <p className="text-red-500 text-xs">
            {errors.packages.message as string}
          </p>
        )}
      </div>
    </div>
  );
};

// Étape 3 du formulaire
const StepThree: React.FC<StepProps> = ({ register, errors, methods }) => {
  const onSubmit = async () => {
    const data = methods.getValues();
    console.log('Données du formulaire:', data);

    try {
      const response = await fetch('/api/travel/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Réponse de l'API:", result);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données:", error);
    }
  };

  return (
    <div className="py-4 space-y-2">
      <p>
        Vous êtes sur le point de soumettre vos données. Assurez-vous que tout
        est correct.
      </p>
      <Button onClick={onSubmit}>Soumettre</Button>
    </div>
  );
};

// Composant principal du formulaire multi-étapes
const MultiStepForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm<FormData>({
    resolver: zodResolver(stepSchemas[currentStep]),
    defaultValues: {
      packages: [{ type: '', kilograms: 0 }],
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    if (currentStep === stepSchemas.length - 1) {
      console.log('Form submitted', data);
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  });

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const stepComponents = [
    <StepOne
      register={methods.register}
      errors={methods.formState.errors}
      methods={methods}
      key="stepOne"
    />,
    <StepTwo
      register={methods.register}
      errors={methods.formState.errors}
      methods={methods}
      key="stepTwo"
    />,
    <StepThree
      register={methods.register}
      errors={methods.formState.errors}
      methods={methods}
      key="stepThree"
    />,
  ];

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        {stepComponents[currentStep]}
        <div className="flex justify-between mt-4">
          {currentStep > 0 && (
            <Button type="button" onClick={handleBack}>
              <ArrowLeft size={16} /> Retour
            </Button>
          )}
          <Button type="submit">
            {currentStep === stepSchemas.length - 1 ? 'Soumettre' : 'Suivant'}{' '}
            <ArrowRight size={16} />
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default MultiStepForm;
