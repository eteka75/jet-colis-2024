'use client';
import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { User } from '@prisma/client';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { Label } from '../ui/label';

// Définir le schéma de validation avec Zod
const schema = z.object({
  name: z
    .string()
    .nonempty('Le nom est requis')
    .max(100, 'Maximum 100 caractères'),
  email: z.string().email('Email invalide').nonempty('Email est requis'),
});

// Définir le type pour les données du formulaire en utilisant le schéma Zod
type FormData = z.infer<typeof schema>;

const UpdateProfileForm: React.FC<{ user: User | undefined }> = ({ user }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    // Pré-remplir le formulaire avec les données utilisateur existantes
    if (user) {
      setValue('name', user.name ?? '');
      setValue('email', user.email ?? '');
    }
  }, [user, setValue]);

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
      <div className="space-y-4 px-1">
        <div>
          <Label>Nom:</Label>
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <Label>Email:</Label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => <Input {...field} />}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <Button type="submit">Mettre à jour</Button>
      </div>
    </form>
  );
};

export default UpdateProfileForm;
