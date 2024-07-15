// app/components/CardRegister.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import LineSeparator from '@/components/common/ui/LineSeparator';
import OAuthButtons from '@/components/common/ui/OAuthButtons';
import { registerSchema } from '@/src/lib/validations';
import { registerUser } from '@/src/lib/auth';
import { signIn } from 'next-auth/react';
import { MdOutlineErrorOutline } from 'react-icons/md';

const CardRegister = () => {
  const [isPending, setPending] = useState(false);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setPending(true);

    const result = registerSchema.safeParse({
      firstName,
      lastName,
      email,
      password,
    });

    if (!result.success) {
      setError(result.error.errors.map((err) => err.message).join(', '));
      setPending(false); // Ajout de cette ligne pour arrêter le pending en cas d'erreur de validation
      return;
    }

    try {
      const response = await registerUser(firstName, lastName, email, password);

      if (response.ok) {
        await signIn('credentials', { redirect: true, email, password });
        //router.push('/dashboard'); // Remplacez '/profile' par la route souhaitée après inscription
      } else {
        const data = await response.data;
        setError(data.error);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
    } finally {
      setPending(false);
    }
  };

  return (
    <div>
      {error && (
        <div className="flex text-xs items-center text-red-500 gap-2 text-center md:text-start mb-4 bg-red-50 p-2 px-4 border border-red-200 rounded-md">
          <MdOutlineErrorOutline className="h-5 w-5  " /> {error}
        </div>
      )}
      <form onSubmit={handleSubmit} method="POST">
        <div className="grid gap-2 md:gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                type="text"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstname(e.target.value)}
                required
                disabled={isPending}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
                required
                disabled={isPending}
              />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isPending}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isPending}
            />
          </div>
          <div className="grid gap-2">
            <Button
              type="submit"
              className="w-full border"
              disabled={isPending}
            >
              {isPending ? 'Inscriprion en cours...' : 'Créer mon compte'}
            </Button>
          </div>
        </div>
      </form>
      <div className="py-4 text-sm">
        <LineSeparator>Ou s'inscrire avec</LineSeparator>
        <div className="py-4">
          <OAuthButtons />
        </div>
      </div>
      <div className="text-center w-full text-sm">
        Vous avez déjà un compte ?{' '}
        <Link href="/login" className=" hover:underline">
          <Button variant={'ghost'} className="w-full border mt-2">
            Se connecter
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CardRegister;
