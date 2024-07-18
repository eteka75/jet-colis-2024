'use client'; // src/components/MultiStepForm.tsx
import React, { useState } from 'react';
import {
  useForm,
  FormProvider,
  UseFormRegister,
  FieldValues,
  FieldErrors,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Définir les schémas de validation pour chaque étape avec zod
const stepSchemas = [
  z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
  }),
  z.object({
    email: z.string().email('Invalid email address'),
    phone: z.string().min(1, 'Phone is required'),
  }),
  z.object({
    address: z.string().min(1, 'Address is required'),
    city: z.string().min(1, 'City is required'),
  }),
];

const globalSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
});

interface StepProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const StepOne: React.FC<StepProps> = ({ register, errors }) => (
  <div className="py-4">
    <Label>First Name</Label>
    <Input
      {...register('firstName')}
      placeholder="First Name"
      className={errors.firstName ? 'border-red-500' : ''}
    />
    {errors.firstName && (
      <p className="text-red-500">{errors.firstName.message as string}</p>
    )}
    <Label>Last Name</Label>
    <Input
      {...register('lastName')}
      placeholder="Last Name"
      className={errors.lastName ? 'border-red-500' : ''}
    />
    {errors.lastName && (
      <p className="text-red-500">{errors.lastName.message as string}</p>
    )}
  </div>
);

const StepTwo: React.FC<StepProps> = ({ register, errors }) => (
  <div className="py-4">
    <Label>Email</Label>
    <Input
      {...register('email')}
      placeholder="Email"
      className={errors.email ? 'border-red-500' : ''}
    />
    {errors.email && (
      <p className="text-red-500">{errors.email.message as string}</p>
    )}
    <Label>Phone</Label>
    <Input
      {...register('phone')}
      placeholder="Phone"
      className={errors.phone ? 'border-red-500' : ''}
    />
    {errors.phone && (
      <p className="text-red-500">{errors.phone.message as string}</p>
    )}
  </div>
);

const StepThree: React.FC<StepProps> = ({ register, errors }) => (
  <div className="py-4">
    <Label>Address</Label>
    <Input
      {...register('address')}
      placeholder="Address"
      className={errors.address ? 'border-red-500' : ''}
    />
    {errors.address && (
      <p className="text-red-500">{errors.address.message as string}</p>
    )}
    <Label>City</Label>
    <Input
      {...register('city')}
      placeholder="City"
      className={errors.city ? 'border-red-500' : ''}
    />
    {errors.city && (
      <p className="text-red-500">{errors.city.message as string}</p>
    )}
  </div>
);

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
        <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
          <li
            className={`flex items-center ${
              step === 0
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                step === 0
                  ? 'border-blue-600 dark:border-blue-500'
                  : 'border-gray-500 dark:border-gray-400'
              } rounded-full shrink-0`}
            >
              1
            </span>
            <span>
              <h3 className="font-medium leading-tight">User info</h3>
              <p className="text-sm">Step details here</p>
            </span>
          </li>
          <li
            className={`flex items-center ${
              step === 1
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                step === 1
                  ? 'border-blue-600 dark:border-blue-500'
                  : 'border-gray-500 dark:border-gray-400'
              } rounded-full shrink-0`}
            >
              2
            </span>
            <span>
              <h3 className="font-medium leading-tight">Company info</h3>
              <p className="text-sm">Step details here</p>
            </span>
          </li>
          <li
            className={`flex items-center ${
              step === 2
                ? 'text-blue-600 dark:text-blue-500'
                : 'text-gray-500 dark:text-gray-400'
            } space-x-2.5 rtl:space-x-reverse`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border ${
                step === 2
                  ? 'border-blue-600 dark:border-blue-500'
                  : 'border-gray-500 dark:border-gray-400'
              } rounded-full shrink-0`}
            >
              3
            </span>
            <span>
              <h3 className="font-medium leading-tight">Payment info</h3>
              <p className="text-sm">Step details here</p>
            </span>
          </li>
        </ol>
        <div className="mx-1">
          <StepComponent register={methods.register} errors={errors} />
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
