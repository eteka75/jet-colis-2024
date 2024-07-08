// lib/auth.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || 'your-secret-key'; // Remplacez par une clé secrète sécurisée

// Fonction pour générer un profileId unique
export async function generateProfileId(
  firstName: string,
  lastName: string
): Promise<string> {
  let profileId = `${firstName.toLowerCase()}.${lastName.toLowerCase()}`;
  let counter = 1;

  // Vérifiez si le profileId existe déjà
  while (await prisma.user.findUnique({ where: { profileId } })) {
    profileId = `${firstName.toLowerCase()}.${lastName.toLowerCase()}-${counter}`;
    counter++;
  }

  return profileId;
}

export async function createUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const profileId = await generateProfileId(firstName, lastName);
  const name = `${lastName} ${firstName}`; // Combine le nom et le prénom

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        nom: lastName,
        prenom: firstName,
        profileId,
        name,
      },
    });
    return user;
  } catch (error) {
    console.error(error); // Ajouter un logging pour déboguer
    throw new Error(
      "Une erreur est survenue lors de la création de l'utilisateur"
    );
  }
}
