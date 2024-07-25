// // src/components/StepThree.tsx
// 'use client';

// import React from 'react';
// import { useFormContext } from 'react-hook-form';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/Button';
// import { FormData } from './MultiStepForm';

// const StepThree: React.FC = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     getValues,
//   } = useFormContext<FormData>();

//   const onSubmit = () => {
//     // Handle final form submission here
//   };

//   return (
//     <>
//       <div className="py-4 space-y-2">
//         <div>
//           <Label>Nom du trajet *</Label>
//           <Input {...register('tripName')} />
//           {errors.tripName && (
//             <p className="text-red-500 text-xs">{errors.tripName.message}</p>
//           )}
//         </div>
//         <div>
//           <Label>Description *</Label>
//           <Textarea {...register('description')} />
//           {errors.description && (
//             <p className="text-red-500 text-xs">{errors.description.message}</p>
//           )}
//         </div>
//         <Button onClick={handleSubmit(onSubmit)} className="mt-4">
//           Soumettre
//         </Button>
//       </div>
//     </>
//   );
// };

// export default StepThree;

import React from 'react';
import { useFormContext } from 'react-hook-form';
import { StepOneData } from './StepOne';
import { StepTwoData } from './StepTwo';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { z } from 'zod';
import {
  MAX_POIDS_PART_TRAJET,
  NB_MAX_CARACTERE_DESCRIPTION_TRAJET,
  NB_MAX_CARACTERE_NOM_TRAJET,
  NB_MAX_PACKAGE,
} from '@/constants';
interface StepThreeProps {
  onBack: () => void;
  onSubmit: () => void;
}
export const newTravelSchema = z.object({
  userId: z.string().min(1, 'User requis'),
  transportType: z.string().min(1, 'Type de transport requis'),
  departurePlace: z.string().min(1, 'Lieu de départ requis'),
  departureDate: z.string().min(1, 'Date de départ requise'),
  arrivalPlace: z.string().min(1, "Lieu d'arrivée requis"),
  arrivalDate: z.string().min(1, "Date d'arrivée requise"),
  tripName: z
    .string()
    .min(1)
    .max(
      NB_MAX_CARACTERE_NOM_TRAJET,
      'Nom du trajet requis (' +
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

const StepThree: React.FC<StepThreeProps> = ({ onBack, onSubmit }) => {
  const { getValues } = useFormContext<StepOneData & StepTwoData>();

  const values = getValues();
  const thStyle = 'font-medium opacity-65 uppercase text-xs border-b pb-2 mt-2';
  const hStyle = 'opacity-70 text-sm font-medium';
  const valueStyle = 'opacity-100 text-sm font-bold text-foreground';

  const listPackageStyle = 'px-4 py-2 rounded-md border';

  return (
    <div className="py-4 space-y-2 ">
      {/* <h2 className="text-lg font-bold">Résumé</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-2">
          <h4 className={thStyle}>Trajet</h4>
        </div>
        <div>
          <div className={hStyle}>Type de transport</div>
          <div className={valueStyle}> {values.transportType}</div>
        </div>
        <div></div>
        <div>
          <div className={hStyle}>Lieu de départ</div>
          <div className={valueStyle}> {values.departurePlace}</div>
        </div>
        <div>
          <div className={hStyle}>Date de départ</div>
          <div className={valueStyle}> {values.departureDate}</div>
        </div>
        <div>
          <div className={hStyle}>Lieu d'arrivée</div>
          <div className={valueStyle}> {values.arrivalPlace}</div>
        </div>
        <div>
          <div className={hStyle}>Date d'arrivée</div>
          <div className={valueStyle}> {values.arrivalDate}</div>
        </div>
        <div className="col-span-2">
          <h4 className={thStyle}>Offre</h4>
        </div>
        <div>
          <div className={hStyle}>Nom du trajet</div>
          <div className={valueStyle}> {values.tripName}</div>
        </div>
        <div>
          <div className={hStyle}>Poids total</div>
          <div className={valueStyle}> {values.totalKilograms}kg</div>
        </div>

        <div className="col-span-2">
          <div className={hStyle}>Répartitions des colis</div>
          <div className={valueStyle}>
            <div className="flex gap-2 my-2">
              {values.packages.map((pkg, index) => (
                <div className={listPackageStyle} key={index}>
                  {pkg.type}: {pkg.kilograms} kg
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className={hStyle}>Description</div>
          <div className={valueStyle}> {values.description}</div>
        </div>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex justify-between pt-4">
        <Button
          variant={'outline'}
          onClick={onBack}
          className="btn btn-secondary"
        >
          <ChevronLeft className="h-5 w-5" /> Précédent
        </Button>
        <Button onClick={onSubmit} className="btn btn-primary">
          Soumettre
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
