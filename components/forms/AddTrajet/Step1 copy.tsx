'use client';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User } from '@prisma/client';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PageHeaderHeading } from '@/components/common/ui/page-header';
import CalendarInput from '@/components/common/ui/CalendarInput';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Définir le schéma de validation avec Zod
const schema = z.object({
  name: z
    .string()
    .min(1, 'Le nom est requis')
    .max(100, 'Maximum 100 caractères'),
  email: z.string().email('Email invalide').nonempty('Email est requis'),
});

interface userParamType {
  param1?: string;
}

// Définir le type pour les données du formulaire en utilisant le schéma Zod
type FormData = z.infer<typeof schema>;

const Step1: React.FC<{ userParamType }> = ({ params }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la mise à jour du profil');
      }

      console.log('Profil mis à jour avec succès');
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
      <div className=" px-1 space-y-4">
        <MoyenTransport />
        <DepartArrive />
      </div>

      {/* <div className="my-4">
        <Button type="submit">Mettre à jour</Button>
      </div> */}
    </form>
  );
};

export default Step1;

const MoyenTransport = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <div className="w-full space-y-4">
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="">
            <Label>Moyen de transport :</Label>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select {...field}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Moyen de transport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Avion">Avion</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const DepartArrive = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="">
          <Label>Date de départ :</Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CalendarInput key={'date_depart'} {...field} />
            )}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="">
          <Label>Date d'arrivée :</Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <CalendarInput key={'date_arrive'} {...field} />
            )}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4">
        <div>
          <Label>Lieu de départ :</Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div>
          <Label>Lieu d'arrivée :</Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
      </div>
      <div>
        <Label>Description du voyage :</Label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => <Textarea {...field} />}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>
    </div>
  );
};
