'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  console.log(FormData);

  const credentials = formDataToObject(formData);
  console.log('Credentials:', credentials); // Pour déboguer et vérifier les données

  try {
    const result = await signIn('credentials', {
      redirect: false, // Ne pas rediriger automatiquement
      ...credentials,
    });

    // Vérifiez si l'authentification a réussi
    if (result?.error) {
      throw new Error(result.error);
    }

    return result;
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Email ou mot de passe invalide';
      }
    }
    throw error;
  }
}
