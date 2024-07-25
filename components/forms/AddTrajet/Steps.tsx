'use client';
import React, { useEffect, useState } from 'react';
import {
  useForm,
  FormProvider,
  useFormContext,
  useWatch,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { StepOneSchema, StepOneData } from './StepOne';
import { StepTwoSchema, StepTwoData } from './StepTwo';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import TopSteps from './TopSteps';
import { saveTrip } from '@/src/lib/api';
import { redirect } from 'next/navigation';
import { Info } from 'lucide-react';
import { useSession } from 'next-auth/react';

export type TravelFormData = StepOneData & StepTwoData & { userId?: string };

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const { data: session } = useSession();

  const methods = useForm<TravelFormData>({
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
      userId: session?.user?.id,
      packages: [{ type: '', kilograms: 0 }],
    },
  });

  const values = useWatch({ control: methods.control });

  const onSubmit = async (data: TravelFormData) => {
    setError('');
    const userId = session?.user?.id;

    // Vérifiez si l'ID de l'utilisateur est défini
    if (!userId) {
      setError(
        "L'ID de l'utilisateur est introuvable. Veuillez vérifier votre session."
      );
      console.error('User ID is undefined:', userId);
      return;
    }
    const tripData = {
      userId: userId,
      ...values,
    };

    try {
      await saveTrip(tripData);
      redirect('/new-travel/success');
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.error ||
        "Erreur lors de l'envoi des données. Veuillez réessayer...";
      setError(errorMessage);
      console.error("Erreur lors de l'envoi des données", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <TopSteps stepIndex={step} />
      <form onSubmit={methods.handleSubmit(onSubmit)} method="POST">
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
      {error !== '' && (
        <div className="pb-2 text-xs text-red-500 flex gap-1 items-center">
          <Info className="w-4" />
          {error}
        </div>
      )}
    </FormProvider>
  );
};

export default App;
