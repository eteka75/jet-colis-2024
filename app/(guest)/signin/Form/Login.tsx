'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import OAuthButtons from '@/components/common/ui/OAuthButtons';
import LineSeparator from '@/components/common/ui/LineSeparator';
import { authenticate } from '@/lib/server-actions';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { PiLockKeyLight } from 'react-icons/pi';
import { IoIosAt } from 'react-icons/io';
import { z } from 'zod';
import { FaEdit } from 'react-icons/fa';

const emailSchema = z.string().email({ message: 'Invalid email address' });
const passwordSchema = z
  .string()
  .min(6, { message: 'Password must be at least 6 characters long' });

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const [step1, setStep1] = useState<boolean>(true);
  const [step2, setStep2] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const checkEmailIsValid = (
    email: string
  ): z.SafeParseReturnType<string, string> => {
    return emailSchema.safeParse(email);
  };

  const checkPasswordIsValid = (
    password: string
  ): z.SafeParseReturnType<string, string> => {
    return passwordSchema.safeParse(password);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPending(true);
    setEmailError(null);
    setPasswordError(null);

    const formData = new FormData(event.currentTarget);
    const getEmail = formData.get('email');
    const password = formData.get('password');

    // Check if email and password are strings before proceeding
    if (typeof getEmail !== 'string' || typeof password !== 'string') {
      if (typeof getEmail !== 'string') {
        setEmailError('Invalid email');
      }
      if (typeof password !== 'string') {
        setPasswordError('Invalid password');
      }
      setIsPending(false);
      return;
    }

    const emailValidationResult = checkEmailIsValid(getEmail);
    const passwordValidationResult = checkPasswordIsValid(password);

    if (!emailValidationResult.success) {
      setEmailError(emailValidationResult.error.errors[0].message);
      alert('NO email');

      setStep1(false);
      setEmail(getEmail);
      setStep2(true);
      setIsPending(false);
      return;
    } else {
      alert('Yes email');
    }

    if (!passwordValidationResult.success) {
      setPasswordError(passwordValidationResult.error.errors[0].message);
      setIsPending(false);
      return;
    }

    try {
      const result = await authenticate(undefined, formData);
      if (result) {
        setErrorMessage(result);
      }
    } catch (error) {
      console.error('Erreur', error);
      setErrorMessage('Something went wrong.');
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="grid gap-4">
          {errorMessage && (
            <div className="flex gap-2">
              <MdOutlineErrorOutline className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
          {step1 && email && (
            <div className="flex gap-2 text-primary font-bold">
              <FaEdit /> {email}
            </div>
          )}
          {step1 && !step2 && (
            <div className="grid gap-2">
              <div className="relative">
                <Input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="email"
                  type="text"
                  name="email"
                  required
                  placeholder="Email"
                />
                <IoIosAt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              ermail
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </div>
          )}

          {!step1 && step2 && (
            <div className="grid gap-2">
              <div className="relative">
                <Input
                  className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="Mot de passe"
                />
                <PiLockKeyLight className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
              erreur
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Switch id="remember-me" name="remember-me" />
              <Label htmlFor="remember-me" className="text-xs">
                Se souvenir de moi
              </Label>
            </div>
            <Link
              href="/forgot-password"
              className="text-primary text-xs hover:underline"
            >
              Mot de passe oublié ?
            </Link>
          </div>
          <Button className="w-full mt-2" type="submit" disabled={isPending}>
            {step1 ? 'Suivant' : 'Se connecter'}
            {isPending && 'Connexion en cours...'}
          </Button>
          <div className="text-center w-full text-sm">
            Si vous êtes nouveau,{' '}
            <Link href="/signup" className="">
              <Button
                variant={'ghost'}
                className="w-full mt-2 border"
                type="button"
                disabled={isPending}
              >
                Inscrivez-vous
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <div className="pt-4">
            <LineSeparator>ou se connecter avec</LineSeparator>
          </div>
          <div className="py-4">
            <OAuthButtons />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
