import { z } from 'zod';

export const emailSchema = z
  .string()
  .email({ message: 'Adresse email nom valide' });

export const firstnameSchema = z
  .string()
  .min(2, { message: 'Invalid email address' })
  .max(120, { message: 'Votre prénom est trop long, maximum 100 caractères' });

export const lastnameSchema = z
  .string()
  .min(2, { message: 'Invalid email address' })
  .max(120, { message: 'Votre nom est trop long, maximum 100 caractères' });

export const passwordSchema = z
  .string()
  .min(6, { message: 'Le mot de passe doit comporter au moins 6 caractères' })
  .max(32, { message: 'Le mot de passe est trop long, maximum 32 caractères' });

export const registerSchema = z.object({
  firstName: firstnameSchema,
  lastName: lastnameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
