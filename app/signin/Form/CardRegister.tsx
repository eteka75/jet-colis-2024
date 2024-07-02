import LineSeparator from '@/components/common/ui/LineSeparator';
import OAuthButtons from '@/components/common/ui/OAuthButtons';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const CardRegister = () => {
  return (
    // <div className="md:flex md:justify-center md:items-center md:h-screen bg-accent">
    <div className="md:py-12 py-8 bg-accent ">
      <div className="container">
        <Card className="md:py-4  mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Inscription</CardTitle>
            <CardDescription>
              Remplissez les champs ci-dessous pour créer un compte.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" type="text" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" type="text" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" required />
            </div>
            {/* <div className="grid gap-2">
          <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
          <Input id="confirmPassword" type="password" required />
        </div> */}
            <div className="grid gap-2">
              <Button className="w-full">Créer un compte</Button>
            </div>
          </CardContent>

          <div>
            <CardContent>
              <LineSeparator className="text-xs uppercase">
                Ou s'inscrire avec
              </LineSeparator>
              <div className="py-4">
                <OAuthButtons />
              </div>
            </CardContent>
          </div>
          <CardFooter>
            <p className="text-center w-full text-sm">
              Vous avez déjà un compte ?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                Se connecter
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardRegister;
