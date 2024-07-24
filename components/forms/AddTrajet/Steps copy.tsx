// 'use client'; // src/components/MultiStepForm.tsx

// // Étape 1 du formulaire
// import React, { useEffect, useState } from 'react';
// import {
//   useForm,
//   FormProvider,
//   UseFormReturn,
//   useFormContext,
// } from 'react-hook-form';
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
//   // Autres schémas...
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
//                 onBlur={handlePackageBlur}
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

// // const StepOne: React.FC<StepProps> = ({ register, errors, methods }) => {
// //   const { setValue, getValues, setError, clearErrors } = methods;
// //   const [dateError, setDateError] = useState<string | null>(null);

// //   const handleDateChange = (date: Date | null, field: string) => {
// //     if (date) {
// //       const formattedDate = format(date, 'dd/MM/yyyy');
// //       setValue(field as keyof StepsFormData, formattedDate);
// //       validateDates();
// //     } else {
// //       setValue(field as keyof StepsFormData, '');
// //     }
// //   };

// //   const validateDates = () => {
// //     const departureDate = getValues('departureDate');
// //     const arrivalDate = getValues('arrivalDate');

// //     if (departureDate && arrivalDate) {
// //       const parsedDepartureDate = parse(
// //         departureDate,
// //         'dd/MM/yyyy',
// //         new Date()
// //       );
// //       const parsedArrivalDate = parse(arrivalDate, 'dd/MM/yyyy', new Date());

// //       if (!isValid(parsedDepartureDate) || !isValid(parsedArrivalDate)) {
// //         setError('departureDate', {
// //           type: 'manual',
// //           message: 'Dates invalides.',
// //         });
// //         setError('arrivalDate', {
// //           type: 'manual',
// //           message: 'Dates invalides.',
// //         });
// //         return;
// //       }

// //       if (parsedDepartureDate > parsedArrivalDate) {
// //         setError('arrivalDate', {
// //           type: 'manual',
// //           message:
// //             "La date d'arrivée doit être supérieure à la date de départ.",
// //         });
// //       } else {
// //         clearErrors('arrivalDate');
// //       }
// //     }
// //   };

// //   const handleMoyenTransportChange = (value: string) => {
// //     if (value) {
// //       setValue('transportType', value);
// //       clearErrors('transportType');
// //     }
// //   };

// //   return (
// //     <div className="py-4 space-y-2">
// //       <div>
// //         <Label>Moyen de transport *</Label>
// //         <div className="md:grid md:grid-cols-2 gap-4">
// //           <div>
// //             <Select
// //               {...register('transportType')}
// //               onValueChange={(value) => handleMoyenTransportChange(value)}
// //             >
// //               <SelectTrigger>
// //                 <SelectValue placeholder="Sélectionnez" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 <SelectGroup>
// //                   {modesTrans.map((val, index) => (
// //                     <SelectItem key={index} value={val.value}>
// //                       {val.label}
// //                     </SelectItem>
// //                   ))}
// //                 </SelectGroup>
// //               </SelectContent>
// //             </Select>
// //             {errors.transportType && (
// //               <p className="text-red-500 text-xs">
// //                 {errors.transportType.message as string}
// //               </p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //       <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
// //         <div>
// //           <Label>Lieu de départ *</Label>
// //           <Input {...register('departurePlace')} />
// //           {errors.departurePlace && (
// //             <p className="text-red-500 text-xs">
// //               {errors.departurePlace.message as string}
// //             </p>
// //           )}
// //         </div>
// //         <div>
// //           <Label>Date de départ *</Label>
// //           <CalendarInput2
// //             value={
// //               getValues('departureDate')
// //                 ? parse(getValues('departureDate'), 'dd/MM/yyyy', new Date())
// //                 : null
// //             }
// //             onChange={(date) => handleDateChange(date, 'departureDate')}
// //             onBlur={() => {}}
// //             name="departureDate"
// //             dateFormat="dd/MM/yyyy"
// //           />
// //           {errors.departureDate && (
// //             <p className="text-red-500 text-xs">
// //               {errors.departureDate.message as string}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //       <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
// //         <div>
// //           <Label>Lieu d'arrivée *</Label>
// //           <Input {...register('arrivalPlace')} />
// //           {errors.arrivalPlace && (
// //             <p className="text-red-500 text-xs">
// //               {errors.arrivalPlace.message as string}
// //             </p>
// //           )}
// //         </div>
// //         <div>
// //           <Label>Date d'arrivée *</Label>
// //           <CalendarInput2
// //             value={
// //               getValues('arrivalDate')
// //                 ? parse(getValues('arrivalDate'), 'dd/MM/yyyy', new Date())
// //                 : null
// //             }
// //             onChange={(date) => handleDateChange(date, 'arrivalDate')}
// //             onBlur={() => {}}
// //             name="arrivalDate"
// //             dateFormat="dd/MM/yyyy"
// //           />
// //           {errors.arrivalDate && (
// //             <p className="text-red-500 text-xs">
// //               {errors.arrivalDate.message as string}
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // Étape 2 du formulaire
// // const StepTwo: React.FC<StepProps> = ({
// //   register,
// //   errors,
// //   methods,
// //   validateStepTwo,
// // }) => {
// //   const [packages, setPackages] = useState<
// //     { type: string; kilograms: number }[]
// //   >([{ type: '', kilograms: 0 }]);
// //   const { setValue, getValues, trigger, watch } = methods;

// //   const totalKilograms = watch('totalKilograms', 0);
// //   const sumOfPackages = packages.reduce((sum, pkg) => sum + pkg.kilograms, 0);
// //   const nbPackages = packages.length;
// //   const remainingKilograms = totalKilograms - sumOfPackages;
// //   const remainingPackages = NB_MAX_PACKAGE - nbPackages;

// //   // Fonction pour ajouter un colis
// //   const addPackage = () => {
// //     if (
// //       packages.length > 0 &&
// //       packages[packages.length - 1].kilograms > 0 &&
// //       remainingPackages >= 0
// //     ) {
// //       if (packages.length < 5 && remainingKilograms > 0) {
// //         const newPackages = [...packages, { type: '', kilograms: 0 }];
// //         setPackages(newPackages);
// //         setValue('packages', newPackages);
// //       }
// //     }
// //   };

// //   // Fonction pour retirer un colis
// //   const removePackage = (index: number) => {
// //     const newPackages = packages.filter((_, i) => i !== index);
// //     setPackages(newPackages);
// //     setValue('packages', newPackages);
// //   };

// //   const handlePackageChange = (index: number, key: string, value: any) => {
// //     const newPackages = packages.map((pkg, i) =>
// //       i === index ? { ...pkg, [key]: value } : pkg
// //     );
// //     setPackages(newPackages);
// //     setValue('packages', newPackages);
// //   };

// //   const handlePackageBlur = () => {
// //     trigger('packages');
// //   };

// //   return (
// //     <>
// //       <div className="py-4 space-y-2">
// //         <div>
// //           <Label>Nom du trajet *</Label>
// //           <Input {...register('tripName')} />
// //           {errors.tripName && (
// //             <p className="text-red-500 text-xs">
// //               {errors.tripName.message as string}
// //             </p>
// //           )}
// //         </div>
// //         <div>
// //           <Label>Description *</Label>
// //           <Textarea {...register('description')} />
// //           {errors.description && (
// //             <p className="text-red-500 text-xs">
// //               {errors.description.message as string}
// //             </p>
// //           )}
// //         </div>
// //         <div>
// //           <Label>Nombre total de kilogrammes *</Label>
// //           <Input
// //             type="number"
// //             {...register('totalKilograms', { valueAsNumber: true })}
// //           />
// //           {errors.totalKilograms && (
// //             <p className="text-red-500 text-xs">
// //               {errors.totalKilograms.message as string}
// //             </p>
// //           )}
// //           {remainingKilograms > 0 && (
// //             <div className="text-xs opacity-70">
// //               Nombre de kilogramme(s) restant(s): {remainingKilograms}
// //             </div>
// //           )}
// //         </div>
// //         <div>
// //           <Label>Colis *</Label>
// //           {packages.map((pkg, index) => (
// //             <div
// //               key={index}
// //               className="border p-4 rounded-md mb-2 flex flex-col space-y-2"
// //             >
// //               <div className="grid grid-cols-3 gap-4">
// //                 <div>
// //                   <Label>Type de colis *</Label>
// //                   <Select
// //                     value={pkg.type}
// //                     onValueChange={(value) =>
// //                       handlePackageChange(index, 'type', value)
// //                     }
// //                   >
// //                     <SelectTrigger>
// //                       <SelectValue placeholder="Sélectionnez" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       <SelectGroup>
// //                         {packageTypes.map((pkgType) => (
// //                           <SelectItem key={pkgType.value} value={pkgType.value}>
// //                             {pkgType.label}
// //                           </SelectItem>
// //                         ))}
// //                       </SelectGroup>
// //                     </SelectContent>
// //                   </Select>

// //                   {errors.packages &&
// //                     errors.packages[index]?.type &&
// //                     getErrorMessage(errors.packages[index]?.type) && (
// //                       <p className="text-red-500 text-xs">
// //                         {getErrorMessage(errors.packages[index]?.type)}
// //                       </p>
// //                     )}
// //                 </div>

// //                 <div>
// //                   <Label>Kilogrammes *</Label>
// //                   <Input
// //                     type="number"
// //                     value={pkg.kilograms}
// //                     onChange={(e) =>
// //                       handlePackageChange(
// //                         index,
// //                         'kilograms',
// //                         parseFloat(e.target.value)
// //                       )
// //                     }
// //                     onBlur={handlePackageBlur}
// //                   />
// //                   {errors.packages && errors.packages[index]?.kilograms && (
// //                     <p className="text-red-500 text-xs">
// //                       {errors.packages[index]?.kilograms?.message as string}
// //                     </p>
// //                   )}
// //                 </div>
// //                 <div className="">
// //                   {remainingPackages >= 0 && index > 0 && (
// //                     <Button
// //                       type="button"
// //                       onClick={() => removePackage(index)}
// //                       variant="outline"
// //                       size="sm"
// //                       className="mt-6 gap-1"
// //                     >
// //                       <CgRemove className="w-4 h-4" />{' '}
// //                       <span className="md:flex hidden">Supprimer</span>
// //                     </Button>
// //                   )}
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //           <div className="flex justify-between">
// //             <div className="text-xs opacity-70">
// //               {remainingKilograms > 0 && (
// //                 <>Nombre de kilo restant : {remainingKilograms}kg</>
// //               )}
// //             </div>
// //             <Button type="button" onClick={addPackage} variant="outline">
// //               <Plus className="w-4 h-4" />
// //               Ajouter un colis
// //             </Button>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // Étape 3 du formulaire
// const StepThree: React.FC<StepProps> = ({ register, errors, methods }) => {
//   const { getValues, setValue, trigger, watch } =
//     useFormContext<StepsFormData>();

//   useEffect(() => {
//     console.log('Values:', getValues());
//   }, []);

//   return (
//     <>
//       <div>
//         <h1 className="text-xl font-bold mb-4">Récapitulatif</h1>
//       </div>
//       <div className=" space-y-2">
//         <div className="border-b border-t py-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">
//             Moyen de transport
//           </h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('transportType')}
//           </p>
//         </div>
//         <div className="border-b pb-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">Lieu de départ</h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('departurePlace')}
//           </p>
//         </div>
//         <div className="border-b pb-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">Date de départ</h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('departureDate')}
//           </p>
//         </div>
//         <div className="border-b pb-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">Lieu d'arrivée</h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('departureDate')}
//           </p>
//         </div>
//         <div className="border-b pb-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">Date d'arrivée</h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('arrivalDate')}
//           </p>
//         </div>
//         <div className="border-b pb-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">Nom du trajet</h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('tripName')}
//           </p>
//         </div>
//         <div className="border-b pb-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">
//             Description du voyage
//           </h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('description')}
//           </p>
//         </div>
//         <div className=" pb-2 last:border-b-0">
//           <h4 className="text-sm font-medium leading-none">
//             Nombre total de kilogrammes
//           </h4>
//           <p className="text-sm text-muted-foreground">
//             {getValues('totalKilograms').toString()} Kg
//           </p>
//         </div>

//         <div className="borderp-4 border-b pb-4">
//           {getValues('packages').map((pkg, index) => (
//             <div key={index} className="border p-2 rounded-md mb-2">
//               <div>
//                 <h4 className="text-sm font-medium leading-none">{pkg.type}</h4>
//                 <p className="text-sm text-muted-foreground">
//                   {pkg.kilograms.toString()} Kg
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// // Composant principal du formulaire multi-étapes
// const MultiStepForm: React.FC = () => {
//   const [step, setStep] = useState(0);

//   // Configurer les méthodes du formulaire
//   const methods = useForm<StepsFormData>({
//     mode: 'onBlur',
//     resolver: zodResolver(stepSchemas[step]),
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
//     trigger,
//     formState: { errors, isValid },
//     register,
//     getValues,
//     setValue,
//   } = methods;

//   // Fonction pour valider la deuxième étape du formulaire
//   const validateStepTwo = () => {
//     const packages = getValues('packages');
//     const totalKilograms = getValues('totalKilograms');
//     const sumOfPackages = packages.reduce((sum, pkg) => sum + pkg.kilograms, 0);

//     if (sumOfPackages > totalKilograms) {
//       alert(
//         `La somme des kilogrammes des colis (${sumOfPackages} kg) ne doit pas dépasser le nombre total de kilogrammes (${totalKilograms} kg).`
//       );
//       return false;
//     }

//     return true;
//   };

//   const onSubmit = (data: StepsFormData) => {
//     if (step === 1 && !validateStepTwo()) {
//       alert('Retour');
//       return;
//     }

//     if (step === 2) {
//       console.log('Formulaire soumis :', data);
//     } else {
//       setStep(step + 1);
//     }
//   };

//   return (
//     <FormProvider {...methods}>
//       <form onSubmit={handleSubmit(onSubmit)} method="POST">
//         <div className="space-y-4">
//           {step === 0 && (
//             <StepOne register={register} errors={errors} methods={methods} />
//           )}
//           {step === 1 && (
//             <StepTwo register={register} errors={errors} methods={methods} />
//           )}
//           {step === 2 && (
//             <StepThree register={register} errors={errors} methods={methods} />
//           )}

//           <div className="flex justify-between">
//             {step > 0 && (
//               <Button
//                 variant={'outline'}
//                 type="button"
//                 onClick={() => setStep(step - 1)}
//               >
//                 Précédent
//               </Button>
//             )}
//             <Button type="submit">
//               {step === 2 ? 'Soumettre' : 'Suivant'}
//             </Button>
//           </div>
//         </div>
//       </form>
//     </FormProvider>
//   );
// };

// export default MultiStepForm;
// // src/components/MultiStepForm.tsx

// // 'use client'; // src/components/MultiStepForm.tsx

// // import React, { useState, useEffect } from 'react';
// // import {
// //   useForm,
// //   FormProvider,
// //   UseFormRegister,
// //   FieldErrors,
// //   UseFormReturn,
// //   useFormContext,
// // } from 'react-hook-form';
// // import { zodResolver } from '@hookform/resolvers/zod';
// // import * as z from 'zod';
// // import { Label } from '@/components/ui/label';
// // import { Input } from '@/components/ui/input';
// // import { Button } from '@/components/ui/button';
// // import { ArrowLeft, ArrowRight, Plus, Minus } from 'lucide-react';
// // import { cn } from '@/src/lib/utils';
// // import { parse, isValid, format } from 'date-fns';
// // import CalendarInput2 from '@/components/common/ui/CalendarInput2';
// // import { Textarea } from '@/components/ui/textarea';
// // import {
// //   Select,
// //   SelectContent,
// //   SelectGroup,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from '@/components/ui/select';
// // import TopSteps from './TopSteps';
// // import clsx from 'clsx';
// // import { CgRemove } from 'react-icons/cg';

// // const getErrorMessage = (error: any) => {
// //   if (error && typeof error.message === 'string') {
// //     return error.message;
// //   }
// //   return null;
// // };

// // interface FormData {
// //   transportType: string;
// //   departurePlace: string;
// //   departureDate: string;
// //   arrivalPlace: string;
// //   arrivalDate: string;
// //   tripName: string;
// //   description: string;
// //   totalKilograms: number;
// //   packages: {
// //     type: string;
// //     kilograms: number;
// //   }[];
// // }

// // const modesTrans = [
// //   { value: 'voiture', label: 'Voiture' },
// //   { value: 'avion', label: 'Avion' },
// // ];

// // const packageTypes = [
// //   { value: 'electroniques', label: 'Produits Electroniques' },
// //   { value: 'cosmetiques', label: 'Produits Cosmétiques' },
// //   { value: 'alimentaires', label: 'Produits Alimentaires' },
// // ];

// // const isValidDateFormat = (value: string) => {
// //   const date = parse(value, 'dd/MM/yyyy', new Date());
// //   return isValid(date);
// // };

// // const isAfterDepartureDate = (
// //   arrivalDate: string,
// //   departureDate: string
// // ): boolean => {
// //   const dateArrival = parse(arrivalDate, 'dd/MM/yyyy', new Date());
// //   const dateDeparture = parse(departureDate, 'dd/MM/yyyy', new Date());
// //   return dateArrival > dateDeparture;
// // };

// // const stepSchemas = [
// //   z.object({
// //     transportType: z.string().min(1, 'Type de transport requis'),
// //     departurePlace: z.string().min(1, 'Lieu de départ requis'),
// //     departureDate: z.string().refine((value) => isValidDateFormat(value), {
// //       message: 'Format de date invalide (dd/MM/yyyy)',
// //     }),
// //     arrivalPlace: z.string().min(1, "Lieu d'arrivée requis"),
// //     arrivalDate: z.string().refine((value) => isValidDateFormat(value), {
// //       message: 'Format de date invalide (dd/MM/yyyy)',
// //     }),
// //   }),
// //   z.object({
// //     tripName: z
// //       .string()
// //       .min(1, 'Nom du trajet requis')
// //       .max(100, 'Nom du trajet doit avoir au maximum 100 caractères'),
// //     description: z
// //       .string()
// //       .min(1, 'Description requise')
// //       .max(500, 'Description doit avoir au maximum 500 caractères'),
// //     totalKilograms: z.number().min(1, 'Nombre total de kilogrammes requis'),
// //     packages: z.array(
// //       z.object({
// //         type: z.string().min(1, 'Type de colis requis'),
// //         kilograms: z.number().min(1, 'Nombre de kilogrammes requis'),
// //       })
// //     ),
// //   }),
// //   z.object({}),
// // ];

// // interface StepProps {
// //   register: UseFormRegister<FormData>;
// //   errors: FieldErrors<FormData>;
// //   methods: UseFormReturn<FormData>;
// //   validateStepTwo?: () => boolean;
// // }

// // const StepOne: React.FC<StepProps> = ({ register, errors, methods }) => {
// //   const { setValue, getValues } = methods;

// //   const handleDateChange = (date: Date | null, field: string) => {
// //     if (date) {
// //       setValue(field as keyof FormData, format(date, 'dd/MM/yyyy'));
// //     } else {
// //       setValue(field as keyof FormData, '');
// //     }
// //   };

// //   return (
// //     <>
// //       <div className="py-4 space-y-2">
// //         <div>
// //           <Label>Moyen de transport *</Label>
// //           <div className="md:grid md:grid-cols-2 gap-4">
// //             <div>
// //               <Select
// //                 {...register('transportType')}
// //                 onValueChange={(value) => setValue('transportType', value)}
// //               >
// //                 <SelectTrigger>
// //                   <SelectValue placeholder="Sélectionnez" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectGroup>
// //                     {modesTrans.map((val, index) => (
// //                       <SelectItem key={index} value={val.value}>
// //                         {val.label}
// //                       </SelectItem>
// //                     ))}
// //                   </SelectGroup>
// //                 </SelectContent>
// //               </Select>
// //               {errors.transportType && (
// //                 <p className="text-red-500 text-xs">
// //                   {errors.transportType.message as string}
// //                 </p>
// //               )}
// //             </div>
// //           </div>
// //           <div></div>
// //         </div>

// //         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
// //           <div>
// //             <Label>Lieu de départ *</Label>
// //             <Input {...register('departurePlace')} />
// //             {errors.departurePlace && (
// //               <p className="text-red-500 text-xs">
// //                 {errors.departurePlace.message as string}
// //               </p>
// //             )}
// //           </div>

// //           <div>
// //             <Label>Date de départ *</Label>
// //             <CalendarInput2
// //               value={
// //                 getValues('departureDate')
// //                   ? new Date(getValues('departureDate'))
// //                   : null
// //               }
// //               onChange={(date) => handleDateChange(date, 'departureDate')}
// //               onBlur={() => {}}
// //               name="departureDate"
// //               dateFormat="dd/MM/yyyy"
// //             />
// //             {errors.departureDate && (
// //               <p className="text-red-500 text-xs">
// //                 {errors.departureDate.message as string}
// //               </p>
// //             )}
// //           </div>
// //         </div>
// //         <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
// //           <div>
// //             <Label>Lieu d'arrivée *</Label>
// //             <Input {...register('arrivalPlace')} />
// //             {errors.arrivalPlace && (
// //               <p className="text-red-500 text-xs">
// //                 {errors.arrivalPlace.message as string}
// //               </p>
// //             )}
// //           </div>

// //           <div>
// //             <Label>Date d'arrivée*</Label>
// //             <CalendarInput2
// //               value={
// //                 getValues('arrivalDate')
// //                   ? new Date(getValues('arrivalDate'))
// //                   : null
// //               }
// //               onChange={(date) => handleDateChange(date, 'arrivalDate')}
// //               onBlur={() => {}}
// //               name="arrivalDate"
// //               dateFormat="dd/MM/yyyy"
// //             />
// //             {errors.arrivalDate && (
// //               <p className="text-red-500 text-xs">
// //                 {errors.arrivalDate.message as string}
// //               </p>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };
// // const NB_MAX_PACKAGE = 3;
// // const StepTwo: React.FC<StepProps> = ({
// //   register,
// //   errors,
// //   methods,
// //   validateStepTwo,
// // }) => {
// //   const { setValue, getValues, trigger, watch } = methods;
// //   const packages = watch('packages');
// //   const totalKilograms = watch('totalKilograms', 0);
// //   const sumOfPackages = packages.reduce(
// //     (sum: number, pkg: { kilograms: number }) => sum + pkg.kilograms,
// //     0
// //   );
// //   const nbPackages = packages.length;
// //   const remainingKilograms = totalKilograms - sumOfPackages;
// //   const remainingPackages = NB_MAX_PACKAGE - nbPackages;

// //   useEffect(() => {
// //     if (packages.length === 0) {
// //       setValue('packages', [{ type: '', kilograms: 0 }]);
// //     }
// //   }, [packages, setValue]);

// //   const addPackage = () => {
// //     if (
// //       packages.length > 0 &&
// //       packages[packages.length - 1].kilograms > 0 &&
// //       remainingPackages >= 0
// //     ) {
// //       if (packages.length < 5 && remainingKilograms > 0) {
// //         const newPackages = [...packages, { type: '', kilograms: 0 }];
// //         setValue('packages', newPackages);
// //       }
// //     }
// //   };

// //   const removePackage = (index: number) => {
// //     const newPackages = packages.filter((_: any, i: number) => i !== index);
// //     setValue('packages', newPackages);
// //   };

// //   const handlePackageChange = (index: number, key: string, value: any) => {
// //     const newPackages = [...packages];
// //     newPackages[index] = { ...newPackages[index], [key]: value };
// //     setValue('packages', newPackages);
// //     if (validateStepTwo) validateStepTwo();
// //   };

// //   return (
// //     <>
// //       <div className="py-4 space-y-2">
// //         <div>
// //           <Label>Nom du trajet *</Label>
// //           <Input {...register('tripName')} />
// //           {errors.tripName && (
// //             <p className="text-red-500 text-xs">
// //               {errors.tripName.message as string}
// //             </p>
// //           )}
// //         </div>

// //         <div>
// //           <Label>Description *</Label>
// //           <Textarea {...register('description')} />
// //           {errors.description && (
// //             <p className="text-red-500 text-xs">
// //               {errors.description.message as string}
// //             </p>
// //           )}
// //         </div>

// //         <div>
// //           <Label>Nombre total de kilogrammes *</Label>
// //           <Input
// //             type="number"
// //             {...register('totalKilograms', { valueAsNumber: true })}
// //           />
// //           {errors.totalKilograms && (
// //             <p className="text-red-500 text-xs">
// //               {errors.totalKilograms.message as string}
// //             </p>
// //           )}
// //           {totalKilograms > 0 && remainingKilograms >= 0 && (
// //             <p className="text-gray-500 text-xs">
// //               Kilogrammes restants: {remainingKilograms}
// //             </p>
// //           )}
// //         </div>

// //         {packages.map((pkg, index) => (
// //           <div
// //             key={index}
// //             className="grid md:grid-cols-4 grid-cols-2 gap-4 items-end"
// //           >
// //             <div className="col-span-1">
// //               <Label>Type de colis *</Label>
// //               <Select
// //                 value={pkg.type}
// //                 onValueChange={(value) =>
// //                   handlePackageChange(index, 'type', value)
// //                 }
// //               >
// //                 <SelectTrigger>
// //                   <SelectValue placeholder="Sélectionnez" />
// //                 </SelectTrigger>
// //                 <SelectContent>
// //                   <SelectGroup>
// //                     {packageTypes.map((val, i) => (
// //                       <SelectItem key={i} value={val.value}>
// //                         {val.label}
// //                       </SelectItem>
// //                     ))}
// //                   </SelectGroup>
// //                 </SelectContent>
// //               </Select>
// //               {errors.packages?.[index]?.type && (
// //                 <p className="text-red-500 text-xs">
// //                   {getErrorMessage(errors.packages[index].type)}
// //                 </p>
// //               )}
// //             </div>

// //             <div className="col-span-1">
// //               <Label>Kilogrammes *</Label>
// //               <Input
// //                 type="number"
// //                 value={pkg.kilograms}
// //                 onChange={(e) =>
// //                   handlePackageChange(
// //                     index,
// //                     'kilograms',
// //                     Number(e.target.value)
// //                   )
// //                 }
// //               />
// //               {errors.packages?.[index]?.kilograms && (
// //                 <p className="text-red-500 text-xs">
// //                   {errors.packages[index].kilograms?.message as string}
// //                 </p>
// //               )}
// //             </div>

// //             {index > 0 && (
// //               <div className="col-span-2 md:col-span-1">
// //                 <Button
// //                   type="button"
// //                   variant="ghost"
// //                   onClick={() => removePackage(index)}
// //                 >
// //                   <Minus size={16} />
// //                   Retirer
// //                 </Button>
// //               </div>
// //             )}
// //           </div>
// //         ))}

// //         <Button
// //           type="button"
// //           variant="outline"
// //           onClick={addPackage}
// //           disabled={remainingPackages <= 0 || remainingKilograms <= 0}
// //         >
// //           <Plus size={16} />
// //           Ajouter un colis
// //         </Button>
// //         {remainingPackages <= 0 && (
// //           <p className="text-red-500 text-xs">
// //             Vous avez atteint le nombre maximum de colis.
// //           </p>
// //         )}
// //         {remainingKilograms <= 0 && (
// //           <p className="text-red-500 text-xs">
// //             Vous avez atteint le nombre maximum de kilogrammes.
// //           </p>
// //         )}
// //       </div>
// //     </>
// //   );
// // };

// // const StepThree: React.FC<StepProps> = ({ register, errors, methods }) => {
// //   const { setValue, getValues } = methods;

// //   return (
// //     <>
// //       <div className="py-4 space-y-2">
// //         <p className="text-gray-700 text-xl font-bold mb-4">
// //           Confirmation des informations
// //         </p>

// //         <div className=" space-y-2">
// //           <div className="border-b border-t py-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">
// //               Moyen de transport
// //             </h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('transportType')}
// //             </p>
// //           </div>
// //           <div className="border-b pb-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">Lieu de départ</h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('departurePlace')}
// //             </p>
// //           </div>
// //           <div className="border-b pb-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">Date de départ</h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('departureDate')}
// //             </p>
// //           </div>
// //           <div className="border-b pb-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">Lieu d'arrivée</h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('departureDate')}
// //             </p>
// //           </div>
// //           <div className="border-b pb-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">Date d'arrivée</h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('arrivalDate')}
// //             </p>
// //           </div>
// //           <div className="border-b pb-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">Nom du trajet</h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('tripName')}
// //             </p>
// //           </div>
// //           <div className="border-b pb-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">
// //               Description du voyage
// //             </h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('description')}
// //             </p>
// //           </div>
// //           <div className=" pb-2 last:border-b-0">
// //             <h4 className="text-sm font-medium leading-none">
// //               Nombre total de kilogrammes
// //             </h4>
// //             <p className="text-sm text-muted-foreground">
// //               {getValues('totalKilograms').toString()} Kg
// //             </p>
// //           </div>

// //           <div className="borderp-4 border-b pb-4">
// //             {getValues('packages').map((pkg, index) => (
// //               <div key={index} className="border p-2 rounded-md mb-2">
// //                 <div>
// //                   <h4 className="text-sm font-medium leading-none">
// //                     {pkg.type}
// //                   </h4>
// //                   <p className="text-sm text-muted-foreground">
// //                     {pkg.kilograms.toString()} Kg
// //                   </p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // const MultiStepForm: React.FC = () => {
// //   const [currentStep, setCurrentStep] = useState<number>(0);

// //   const methods = useForm<FormData>({
// //     resolver: zodResolver(stepSchemas[currentStep]),
// //     defaultValues: getInitialFormData(),
// //   });

// //   const {
// //     handleSubmit,
// //     trigger,
// //     setError,
// //     clearErrors,
// //     watch,
// //     setValue,
// //     formState: { errors },
// //   } = methods;

// //   useEffect(() => {
// //     saveFormDataToLocalStorage(watch());
// //   }, [watch()]);

// //   const onSubmit = (data: FormData) => {
// //     if (currentStep < stepSchemas.length - 1) {
// //       setCurrentStep((prev) => prev + 1);
// //     } else {
// //       console.log('Formulaire soumis:', data);
// //     }
// //   };

// //   const handleBack = () => {
// //     if (currentStep > 0) {
// //       setCurrentStep((prev) => prev - 1);
// //     }
// //   };

// //   const validateStepTwo = () => {
// //     const totalKilograms = watch('totalKilograms');
// //     const packages = watch('packages') || [];
// //     const sumOfPackages = packages.reduce((sum, pkg) => sum + pkg.kilograms, 0);

// //     if (sumOfPackages > totalKilograms) {
// //       setError('totalKilograms', {
// //         type: 'manual',
// //         message:
// //           'Le nombre total de kilogrammes ne peut pas être inférieur à la somme des kilogrammes des colis.',
// //       });
// //       return false;
// //     }

// //     clearErrors('totalKilograms');
// //     return true;
// //   };

// //   return (
// //     <FormProvider {...methods}>
// //       <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
// //         <TopSteps stepIndex={currentStep} />

// //         {currentStep === 0 && (
// //           <StepOne
// //             register={methods.register}
// //             errors={errors}
// //             methods={methods}
// //           />
// //         )}
// //         {currentStep === 1 && (
// //           <StepTwo
// //             register={methods.register}
// //             errors={errors}
// //             methods={methods}
// //             validateStepTwo={validateStepTwo}
// //           />
// //         )}
// //         {currentStep === 2 && (
// //           <StepThree
// //             register={methods.register}
// //             errors={errors}
// //             methods={methods}
// //           />
// //         )}

// //         <div className="flex justify-between">
// //           <Button
// //             type="button"
// //             variant="outline"
// //             onClick={handleBack}
// //             disabled={currentStep === 0}
// //           >
// //             <ArrowLeft size={16} />
// //             Retour
// //           </Button>
// //           <Button type="submit">
// //             {currentStep === stepSchemas.length - 1 ? 'Soumettre' : 'Suivant'}
// //             <ArrowRight size={16} />
// //           </Button>
// //         </div>
// //       </form>
// //     </FormProvider>
// //   );
// // };

// // function getInitialFormData(): FormData {
// //   const savedData = localStorage.getItem('formData');
// //   return savedData
// //     ? JSON.parse(savedData)
// //     : {
// //         transportType: '',
// //         departurePlace: '',
// //         departureDate: '',
// //         arrivalPlace: '',
// //         arrivalDate: '',
// //         tripName: '',
// //         description: '',
// //         totalKilograms: 0,
// //         packages: [],
// //       };
// // }

// // function saveFormDataToLocalStorage(data: FormData) {
// //   localStorage.setItem('formData', JSON.stringify(data));
// // }

// // export default MultiStepForm;
