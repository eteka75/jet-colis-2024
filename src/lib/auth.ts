// lib/auth.ts

import { PrismaClient, User } from '@prisma/client';
import { Payload } from '@/src/types/definitions';
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { sign, verify, SignOptions, VerifyOptions } from 'jsonwebtoken';
const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key'; // Remplacez par une clé secrète sécurisée

export async function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  try {
    const response = await axios.post('/api/auth/register', {
      firstName,
      lastName,
      email,
      password,
    });
    return {
      ok: true,
      data: response.data,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(
        err.response?.data?.error ||
          "Une erreur est survenue lors de l'inscription"
      );
    } else if (err instanceof Error) {
      throw new Error(err.message || 'Erreur réseau ou serveur');
    } else {
      throw new Error('Erreur inconnue');
    }
  }
}

// Fonction pour vérifier les identifiants de connexion
export async function validateUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }
  return user;
}

// Fonction pour générer un token JWT
export function generateToken(payload: Payload, options?: SignOptions) {
  return sign(payload, SECRET_KEY, options);
}

// Fonction pour vérifier un token JWT
export function verifyToken(
  token: string,
  options?: VerifyOptions
): Payload | null {
  try {
    return verify(token, SECRET_KEY, options) as Payload;
  } catch {
    return null;
  }
}
