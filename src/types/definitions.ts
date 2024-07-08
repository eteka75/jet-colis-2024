export type User = {
  id: string;
  name: string | null;
  nom: string;
  prenom: string | null;
  bio: string | null;
  email: string;
  dateOfBirth: Date | null;
  country: string | null;
  emailVerified: Date | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface Payload {
  id: number;
  email: string;
}

export interface UserWithoutPassword {
  id: number;
  name: string | null;
  email: string;
}
