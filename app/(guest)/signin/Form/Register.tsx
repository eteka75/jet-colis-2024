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
    <div className=" pb-4 bg-accente ">
      <div className="container">
        <Card className="mx-auto max-w-sm shadow-none border-0 px-0 md:px-4 md:border  ">
          <CardHeader className="px-0 md:px-4 text-center md:text-start">
            <CardTitle className="text-2xl">Inscription</CardTitle>
            <CardDescription>
              Remplissez vos informations pour vous inscrire.
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0 md:px-4">
            <CardRegister />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
