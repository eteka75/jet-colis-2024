'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { siteConfig } from '../config/website';
import { redirect } from 'next/navigation';

// Fonction pour convertir FormData en objet JavaScript
function formDataToObject(formData: FormData) {
  return Object.fromEntries(formData.entries());
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
): Promise<{ message?: string }> {
  const credentials = formDataToObject(formData);

  try {
    // Récupérer et convertir le callbackUrl en string
    const callbackUrlEntry = formData.get('callbackUrl');
    const callbackUrl =
      typeof callbackUrlEntry === 'string'
        ? callbackUrlEntry
        : siteConfig.homeUserLogin;

    const result = await signIn('credentials', {
      redirect: true,
      ...credentials,
      callbackUrl,
    });

    // La redirection est gérée par signIn lorsque redirect: true
    return { message: 'Authentification réussie' };
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
