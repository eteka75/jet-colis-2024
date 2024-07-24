'use client';
import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StepOneSchema, StepOneData } from './StepOne';
import { StepTwoSchema, StepTwoData } from './StepTwo';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

type FormData = StepOneData & StepTwoData;

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const methods = useForm<FormData>({
    resolver: zodResolver(step === 1 ? StepOneSchema : StepTwoSchema),
    mode: 'onChange',
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

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {step === 1 && <StepOne onNext={() => setStep(2)} />}
        {step === 2 && (
          <StepTwo onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          <StepThree
            onBack={() => setStep(2)}
            onSubmit={() => methods.handleSubmit(onSubmit)()}
          />
        )}
      </form>
    </FormProvider>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';
// import { useForm, FormProvider, useFormContext } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import { Label } from '@/components/ui/label';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import CalendarInput2 from '@/components/common/ui/CalendarInput2';
// import { StepProps, StepsFormData } from '@/src/lib/definitions';
// import { modesTrans, NB_MAX_PACKAGE, packageTypes } from '@/constants';
// import { getErrorMessage, isValidDateFormat } from '@/src/lib/fn';
// import { format, isValid, parse } from 'date-fns';
// import { Textarea } from '@/components/ui/textarea';
// import { CgRemove } from 'react-icons/cg';
// import { Plus } from 'lucide-react';

// // Schémas de validation
// const stepSchemas = [
//   z.object({
//     transportType: z.string().min(1, 'Type de transport requis'),
//     departurePlace: z.string().min(1, 'Lieu de départ requis'),
//     departureDate: z.string().refine((value) => isValidDateFormat(value), {
//       message: 'Format de date invalide (dd/MM/yyyy)',
//     }),
//     arrivalPlace: z.string().min(1, "Lieu d'arrivée requis"),
//     arrivalDate: z.string().refine((value) => isValidDateFormat(value), {
//       message: 'Format de date invalide (dd/MM/yyyy)',
//     }),
//   }),
//   z.object({
//     tripName: z.string().min(1, 'Nom du trajet requis'),
//     description: z.string().min(1, 'Description requise'),
//     totalKilograms: z
//       .number()
//       .positive('Le nombre de kilogrammes doit être positif'),
//     packages: z
//       .array(
//         z.object({
//           type: z.string().min(1, 'Type de colis requis'),
//           kilograms: z
//             .number()
//             .positive('Le nombre de kilogrammes doit être positif'),
//         })
//       )
//       .max(
//         NB_MAX_PACKAGE,
//         `Le nombre maximum de colis est de ${NB_MAX_PACKAGE}`
//       ),
//   }),
// ];

// const StepOne: React.FC<StepProps> = ({ register, errors, methods }) => {
//   const { setValue, getValues, setError, clearErrors } = methods;
//   const [dateError, setDateError] = useState<string | null>(null);

//   const handleDateChange = (date: Date | null, field: string) => {
//     if (date) {
//       const formattedDate = format(date, 'dd/MM/yyyy');
//       setValue(field as keyof StepsFormData, formattedDate);
//       validateDates();
//     } else {
//       setValue(field as keyof StepsFormData, '');
//     }
//   };

//   const validateDates = () => {
//     const departureDate = getValues('departureDate');
//     const arrivalDate = getValues('arrivalDate');

//     if (departureDate && arrivalDate) {
//       const parsedDepartureDate = parse(
//         departureDate,
//         'dd/MM/yyyy',
//         new Date()
//       );
//       const parsedArrivalDate = parse(arrivalDate, 'dd/MM/yyyy', new Date());

//       if (!isValid(parsedDepartureDate) || !isValid(parsedArrivalDate)) {
//         setError('departureDate', {
//           type: 'manual',
//           message: 'Dates invalides.',
//         });
//         setError('arrivalDate', {
//           type: 'manual',
//           message: 'Dates invalides.',
//         });
//         return;
//       }

//       if (parsedDepartureDate > parsedArrivalDate) {
//         setError('arrivalDate', {
//           type: 'manual',
//           message:
//             "La date d'arrivée doit être supérieure à la date de départ.",
//         });
//       } else {
//         clearErrors('arrivalDate');
//       }
//     }
//   };

//   const handleMoyenTransportChange = (value: string) => {
//     if (value) {
//       setValue('transportType', value);
//       clearErrors('transportType');
//     }
//   };

//   return (
//     <div className="py-4 space-y-2">
//       <div>
//         <Label>Moyen de transport *</Label>
//         <div className="md:grid md:grid-cols-2 gap-4">
//           <div>
//             <Select
//               {...register('transportType')}
//               onValueChange={(value) => handleMoyenTransportChange(value)}
//             >
//               <SelectTrigger>
//                 <SelectValue placeholder="Sélectionnez" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectGroup>
//                   {modesTrans.map((val, index) => (
//                     <SelectItem key={index} value={val.value}>
//                       {val.label}
//                     </SelectItem>
//                   ))}
//                 </SelectGroup>
//               </SelectContent>
//             </Select>
//             {errors.transportType && (
//               <p className="text-red-500 text-xs">
//                 {errors.transportType.message as string}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
//         <div>
//           <Label>Lieu de départ *</Label>
//           <Input {...register('departurePlace')} />
//           {errors.departurePlace && (
//             <p className="text-red-500 text-xs">
//               {errors.departurePlace.message as string}
//             </p>
//           )}
//         </div>
//         <div>
//           <Label>Date de départ *</Label>
//           <CalendarInput2
//             value={
//               getValues('departureDate')
//                 ? parse(getValues('departureDate'), 'dd/MM/yyyy', new Date())
//                 : null
//             }
//             onChange={(date) => handleDateChange(date, 'departureDate')}
//             onBlur={() => {}}
//             name="departureDate"
//             dateFormat="dd/MM/yyyy"
//           />
//           {errors.departureDate && (
//             <p className="text-red-500 text-xs">
//               {errors.departureDate.message as string}
//             </p>
//           )}
//         </div>
//       </div>
//       <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
//         <div>
//           <Label>Lieu d'arrivée *</Label>
//           <Input {...register('arrivalPlace')} />
//           {errors.arrivalPlace && (
//             <p className="text-red-500 text-xs">
//               {errors.arrivalPlace.message as string}
//             </p>
//           )}
//         </div>
//         <div>
//           <Label>Date d'arrivée *</Label>
//           <CalendarInput2
//             value={
//               getValues('arrivalDate')
//                 ? parse(getValues('arrivalDate'), 'dd/MM/yyyy', new Date())
//                 : null
//             }
//             onChange={(date) => handleDateChange(date, 'arrivalDate')}
//             onBlur={() => {}}
//             name="arrivalDate"
//             dateFormat="dd/MM/yyyy"
//           />
//           {errors.arrivalDate && (
//             <p className="text-red-500 text-xs">
//               {errors.arrivalDate.message as string}
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// const StepTwo: React.FC<StepProps> = ({ register, errors, methods }) => {
//   const [packages, setPackages] = useState<
//     { type: string; kilograms: number }[]
//   >([{ type: '', kilograms: 0 }]);
//   const { setValue, getValues, trigger, watch } = methods;

//   const totalKilograms = watch('totalKilograms', 0);
//   const sumOfPackages = packages.reduce((sum, pkg) => sum + pkg.kilograms, 0);
//   const nbPackages = packages.length;
//   const remainingKilograms = totalKilograms - sumOfPackages;
//   const remainingPackages = NB_MAX_PACKAGE - nbPackages;

//   const addPackage = () => {
//     if (
//       packages.length > 0 &&
//       packages[packages.length - 1].kilograms > 0 &&
//       remainingPackages >= 0
//     ) {
//       if (packages.length < 5 && remainingKilograms > 0) {
//         const newPackages = [...packages, { type: '', kilograms: 0 }];
//         setPackages(newPackages);
//         setValue('packages', newPackages);
//       }
//     }
//   };

//   const removePackage = (index: number) => {
//     const newPackages = packages.filter((_, i) => i !== index);
//     setPackages(newPackages);
//     setValue('packages', newPackages);
//   };

//   const handlePackageChange = (index: number, key: string, value: any) => {
//     const newPackages = packages.map((pkg, i) =>
//       i === index ? { ...pkg, [key]: value } : pkg
//     );
//     setPackages(newPackages);
//     setValue('packages', newPackages);
//   };

//   const handlePackageBlur = () => {
//     trigger('packages');
//   };

//   return (
//     <div className="py-4 space-y-2">
//       <div>
//         <Label>Nom du trajet *</Label>
//         <Input {...register('tripName')} />
//         {errors.tripName && (
//           <p className="text-red-500 text-xs">
//             {errors.tripName.message as string}
//           </p>
//         )}
//       </div>
//       <div>
//         <Label>Description *</Label>
//         <Textarea {...register('description')} />
//         {errors.description && (
//           <p className="text-red-500 text-xs">
//             {errors.description.message as string}
//           </p>
//         )}
//       </div>
//       <div>
//         <Label>Total kilogrammes *</Label>
//         <Input
//           type="number"
//           {...register('totalKilograms', { valueAsNumber: true })}
//         />
//         {errors.totalKilograms && (
//           <p className="text-red-500 text-xs">
//             {errors.totalKilograms.message as string}
//           </p>
//         )}
//       </div>
//       <div>
//         <Label>Colis</Label>
//         {packages.map((pkg, index) => (
//           <div
//             key={index}
//             className="grid md:grid-cols-3 grid-cols-1 gap-4 items-center"
//           >
//             <div>
//               <Select
//                 value={pkg.type}
//                 onValueChange={(value) =>
//                   handlePackageChange(index, 'type', value)
//                 }
//                 // onBlur={handlePackageBlur}
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="Type de colis" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {packageTypes.map((type, idx) => (
//                       <SelectItem key={idx} value={type.value}>
//                         {type.label}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             </div>
//             <div>
//               <Input
//                 type="number"
//                 value={pkg.kilograms}
//                 onChange={(e) =>
//                   handlePackageChange(
//                     index,
//                     'kilograms',
//                     Number(e.target.value)
//                   )
//                 }
//                 onBlur={handlePackageBlur}
//               />
//             </div>
//             {index > 0 && (
//               <Button
//                 type="button"
//                 onClick={() => removePackage(index)}
//                 className="bg-red-500 hover:bg-red-600"
//               >
//                 <CgRemove />
//               </Button>
//             )}
//           </div>
//         ))}
//         {remainingPackages > 0 && remainingKilograms > 0 && (
//           <Button type="button" onClick={addPackage} className="mt-2">
//             <Plus /> Ajouter un colis
//           </Button>
//         )}
//         {errors.packages && (
//           <p className="text-red-500 text-xs">
//             {errors.packages.message as string}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// const App: React.FC = () => {
//   const methods = useForm<StepsFormData>({
//     resolver: zodResolver(stepSchemas[0]),
//     mode: 'onChange',
//     defaultValues: {
//       transportType: '',
//       departurePlace: '',
//       departureDate: '',
//       arrivalPlace: '',
//       arrivalDate: '',
//       tripName: '',
//       description: '',
//       totalKilograms: 0,
//       packages: [{ type: '', kilograms: 0 }],
//     },
//   });

//   const {
//     handleSubmit,
//     register,
//     formState: { errors },
//     trigger,
//     reset,
//   } = methods;

//   const onSubmit = (data: StepsFormData) => {
//     console.log('Form submitted:', data);
//   };

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <StepOne register={register} errors={errors} methods={methods} />
//         <StepTwo register={register} errors={errors} methods={methods} />
//         <Button type="submit">Soumettre</Button>
//       </form>
//     </FormProvider>
//   );
// };

// export default App;
