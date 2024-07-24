import React, { useState, useEffect } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
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
import { Textarea } from '@/components/ui/textarea';
import { CgRemove } from 'react-icons/cg';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import {
  packageTypes,
  NB_MAX_PACKAGE,
  MAX_POIDS_PART_TRAJET,
  NB_MAX_CARACTERE_DESCRIPTION_TRAJET,
  NB_MAX_CARACTERE_NOM_TRAJET,
} from '@/constants';
import { Button } from '@/components/ui/button';

export const StepTwoSchema = z.object({
  tripName: z
    .string()
    .min(1)
    .max(
      NB_MAX_CARACTERE_NOM_TRAJET,
      'Nom du trajet requis  (' +
        NB_MAX_CARACTERE_NOM_TRAJET +
        ' caractères max)'
    ),
  description: z
    .string()
    .min(1)
    .max(
      NB_MAX_CARACTERE_DESCRIPTION_TRAJET,
      'Description requise (' +
        NB_MAX_CARACTERE_DESCRIPTION_TRAJET +
        ' caractères max)'
    ),
  totalKilograms: z
    .number()
    .positive('Le nombre de kilogrammes doit être positif')
    .max(
      MAX_POIDS_PART_TRAJET,
      'Poids maximum autorisé : ' + MAX_POIDS_PART_TRAJET + ' kg'
    ),
  packages: z
    .array(
      z.object({
        type: z.string().min(1, 'Type de colis requis'),
        kilograms: z
          .number()
          .positive('Le nombre de kilogrammes doit être positif'),
      })
    )
    .max(NB_MAX_PACKAGE, `Le nombre maximum de colis est de ${NB_MAX_PACKAGE}`),
});

export type StepTwoData = z.infer<typeof StepTwoSchema>;

interface StepTwoProps {
  onNext: () => void;
  onBack: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({ onNext, onBack }) => {
  const {
    register,
    control,
    formState: { errors, isValid },
    setValue,
    getValues,
    watch,
    trigger,
  } = useFormContext<StepTwoData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'packages',
  });
  const [usedTypes, setUsedTypes] = useState<string[]>([]);
  const [isFormValid, setIsFormValid] = useState(true);

  const totalKilograms = watch('totalKilograms', 0);
  const packages = watch('packages', []);
  const sumOfPackages = packages.reduce((sum, pkg) => sum + pkg.kilograms, 0);
  const remainingKilograms = totalKilograms - sumOfPackages;

  useEffect(() => {
    const validateForm = async () => {
      const valid = await trigger();
      setIsFormValid(
        valid &&
          remainingKilograms >= 0 &&
          packages.every((pkg) => pkg.kilograms > 0)
      );
    };
    validateForm();
  }, [trigger, remainingKilograms, packages, isValid]);

  const handlePackageChange = (index: number, key: string, value: any) => {
    const newPackages = [...packages];
    newPackages[index] = { ...newPackages[index], [key]: value };
    setValue('packages', newPackages, { shouldValidate: true });
    trigger('packages');
  };

  const handleAddPackage = () => {
    if (remainingKilograms > 0 && packages.length < NB_MAX_PACKAGE) {
      // Check if any package has invalid weight
      const hasInvalidWeight = packages.some((pkg) => pkg.kilograms <= 0);
      if (!hasInvalidWeight) {
        append({ type: '', kilograms: 0 });
      }
    }
  };

  const handleRemovePackage = (index: number) => {
    remove(index);
  };

  const handleNext = async () => {
    const valid = await trigger();
    if (valid) onNext();
  };

  // Determine if "Add Package" button should be disabled
  const isAddButtonDisabled =
    remainingKilograms < 0 || packages.some((pkg) => pkg.kilograms <= 0);

  return (
    <div className="py-4 space-y-2">
      <div>
        <Label>Nom du trajet *</Label>
        <Input {...register('tripName')} />
        {errors.tripName && (
          <p className="text-red-500 text-xs">{errors.tripName.message}</p>
        )}
      </div>

      <div>
        <Label>Total kilogrammes *</Label>
        <Input
          type="number"
          {...register('totalKilograms', { valueAsNumber: true })}
        />
        {errors.totalKilograms && (
          <p className="text-red-500 text-xs">
            {errors.totalKilograms.message}
          </p>
        )}
      </div>
      <div>
        <Label>Répartition des colis</Label>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center mb-4"
          >
            <div>
              <Select
                value={field.type}
                onValueChange={(value) =>
                  handlePackageChange(index, 'type', value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Type de colis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {packageTypes
                      .filter(
                        (type) =>
                          !packages.some((pkg) => pkg.type === type.value) ||
                          type.value === field.type
                      )
                      .map((type, idx) => (
                        <SelectItem key={idx} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Input
                type="number"
                value={field.kilograms}
                onChange={(e) =>
                  handlePackageChange(
                    index,
                    'kilograms',
                    Number(e.target.value)
                  )
                }
              />
            </div>
            {index > 0 && (
              <Button
                variant={'outline'}
                onClick={() => handleRemovePackage(index)}
                className="btn btn-danger w-auto gap-1"
              >
                <CgRemove /> <span className="hidden md:flex">Retirer</span>
              </Button>
            )}
          </div>
        ))}

        <div className="flex gap-4 justify-between">
          <div className="opacity-70 text-xs">
            {remainingKilograms >= 0 && (
              <span>Nombre de kilo restant : {remainingKilograms}</span>
            )}
            {isAddButtonDisabled && (
              <p className="text-red-500 text-xs mb-2">
                Assurez-vous que chaque colis a un poids positif et que le poids
                total ne dépasse pas le maximum autorisé.
              </p>
            )}
          </div>
          <div>
            <Button
              variant={'outline'}
              onClick={handleAddPackage}
              size={'sm'}
              className="text- "
              disabled={isAddButtonDisabled || remainingKilograms <= 0}
            >
              <Plus className="w-4 h-4" /> Ajouter
            </Button>
          </div>
        </div>
        <div>
          <Label>Description *</Label>
          <Textarea {...register('description')} />
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-2">
        <Button
          variant={'outline'}
          onClick={onBack}
          className="btn btn-secondary"
        >
          <ChevronLeft className="h-5 w-5" /> Précédent
        </Button>
        <Button
          onClick={handleNext}
          className="btn btn-primary"
          disabled={!isFormValid}
        >
          Suivant <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
