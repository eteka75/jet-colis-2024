// // src/components/StepThree.tsx
// 'use client';

// import React from 'react';
// import { useFormContext } from 'react-hook-form';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
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

interface StepThreeProps {
  onBack: () => void;
  onSubmit: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({ onBack, onSubmit }) => {
  const { getValues } = useFormContext<StepOneData & StepTwoData>();

  const values = getValues();

  return (
    <div className="py-4 space-y-2">
      <h2 className="text-lg font-bold">Résumé</h2>
      <div>
        <h3 className="font-semibold">Étape 1</h3>
        <p>Type de transport: {values.transportType}</p>
        <p>Lieu de départ: {values.departurePlace}</p>
        <p>Date de départ: {values.departureDate}</p>
        <p>Lieu d'arrivée: {values.arrivalPlace}</p>
        <p>Date d'arrivée: {values.arrivalDate}</p>
      </div>
      <div>
        <h3 className="font-semibold">Étape 2</h3>
        <p>Nom du trajet: {values.tripName}</p>
        <p>Description: {values.description}</p>
        <p>Poids total: {values.totalKilograms} kg</p>
        <h4 className="font-semibold">Colis</h4>
        {values.packages.map((pkg, index) => (
          <p key={index}>
            {pkg.type}: {pkg.kilograms} kg
          </p>
        ))}
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-secondary">
          Précédent
        </button>
        <button type="button" onClick={onSubmit} className="btn btn-primary">
          Soumettre
        </button>
      </div>
    </div>
  );
};

export default StepThree;
