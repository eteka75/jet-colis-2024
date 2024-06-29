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
import login_img from '@/public/assets/svg/indicator-svgrepo-com.svg';
import login_indoor from '@/public/assets/svg/Indoor-plants.svg';
import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const SignUp = () => {
  return (
    <div className="">
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="hidden bg-slate-100  lg:block">
          <Image
            src={login_indoor}
            alt="Image"
            width="1920"
            height="1080"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          />
        </div>
        <div className="flex_ md:items-center  justify-center py-12">
          <div className="">
            <Card className=" md:my-8 max-w-md md:mx-0 mx-auto border-0 shadow-none">
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
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
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
                  <Button className="w-full" variant={'primary'}>
                    Créer un compte
                  </Button>
                </div>
                <div className="grid gap-2 text-center">
                  <Separator className="my-4" />
                  <p className="text-sm">Ou se connecter avec</p>
                  <div className="md:flex md:flex-wrap  justify-center md:space-y-0 space-y-2 md:space-x-4">
                    <Button
                      variant="outline"
                      className="flex w-full md:w-auto items-center space-x-2"
                    >
                      <FaGoogle className="h-5 w-5" />
                      <span>Google</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex w-full md:w-auto items-center space-x-2"
                    >
                      <FaFacebook className="h-5 w-5" />
                      <span>Facebook</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="flex w-full md:w-auto items-center space-x-2"
                    >
                      <FaTwitter className="h-5 w-5" />
                      <span>X.com</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
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
      </div>
    </div>
  );
};

export default SignUp;
