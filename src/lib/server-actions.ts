'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { siteConfig } from '../config/website';

// Fonction pour convertir FormData en objet JavaScript
function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
): Promise<{ message: string; redirectUrl?: string }> {
  const credentials = formDataToObject(formData);

  try {
    // Récupérer et convertir le callbackUrl en string
    const callbackUrlEntry = formData.get('callbackUrl');
    const callbackUrl =
      typeof callbackUrlEntry === 'string'
        ? callbackUrlEntry
        : siteConfig.homeUserLogin;

    const result = await signIn('credentials', {
      redirect: false,
      ...credentials,
      callbackUrl,
    });

    if (!result) {
      return { message: 'La connexion a échoué, veuillez réessayer.' };
    }
    return { message: 'Authentification réussie', redirectUrl: callbackUrl };
  } catch (error) {
    let msg = 'Email ou mot de passe invalide';
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          msg = 'Identifiants invalides.';
          break;
        default:
          msg = 'Email ou mot de passe invalide';
          break;
      }
    }
    console.error('Unexpected error:', error);
    return { message: msg };
  }
}
