import CardRegister from './CardRegister';
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
import Link from 'next/link';

const Register = () => {
  return (
    <div className="md:py-12 py-8 bg-accent ">
      <div className="container">
        <Card className=" mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Inscription</CardTitle>
            <CardDescription>
              Remplissez les champs ci-dessous pour créer un compte.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardRegister />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
