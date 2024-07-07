'use client';

import React, { useState } from 'react';

import { Label } from '@/components/ui/label';
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
import { FiEdit2 } from 'react-icons/fi';
import { GrFormNext } from 'react-icons/gr';

const emailSchema = z.string().email({ message: 'Invalid email address' });
const passwordSchema = z
  .string()
  .min(6, { message: 'Password must be at least 6 characters long' });

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
    setErrorMessage(null);
    setPasswordError(null);

    if (step1) {
      if (!email) {
        setEmailError('Email is required');
        setIsPending(false);
        return;
      }

      const emailValidationResult = checkEmailIsValid(email);
      if (!emailValidationResult.success) {
        setEmailError(emailValidationResult.error.errors[0].message);
        setIsPending(false);
        return;
      } else {
        setStep1(false);
        setStep2(true);
        setIsPending(false);
        return;
      }
    }

    if (step2) {
      if (!password) {
        setPasswordError('Password is required');
        setIsPending(false);
        return;
      }

      const passwordValidationResult = checkPasswordIsValid(password);
      if (!passwordValidationResult.success) {
        setPasswordError(passwordValidationResult.error.errors[0].message);
        setIsPending(false);
        return;
      }

      try {
        const result = await authenticate(
          undefined,
          new FormData(event.currentTarget)
        );
        if (result) {
          setErrorMessage(result);
        }
      } catch (error) {
        console.error('Error:', error);
        setErrorMessage('Something went wrong.');
      } finally {
        setIsPending(false);
      }
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
          <div>
            {step2 && email && (
              <Link
                href="#"
                onClick={() => {
                  setErrorMessage(null);
                  setStep1(true);
                  setStep2(false);
                }}
                className="flex items-center mb-2 opacity-80 text-xs gap-1"
              >
                <FiEdit2 /> {email}
              </Link>
            )}

            {step1 && !step2 && (
              <div className="gridgap-2">
                <div className="relative">
                  <Input
                    className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                      emailError ? 'border-red-500' : 'border-gray-200'
                    }`}
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Email"
                  />
                  <IoIosAt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                {emailError && (
                  <p className="text-red-500 text-sm mt-2">{emailError}</p>
                )}
              </div>
            )}

            {!step1 && step2 && (
              <div className="grid gap-2">
                <div className="relative">
                  <Input
                    className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                      passwordError ? 'border-red-500' : 'border-gray-200'
                    }`}
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Mot de passe"
                  />
                  <PiLockKeyLight className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                </div>
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
            )}
          </div>
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
          <Button className="w-full mt-2 " type="submit" disabled={isPending}>
            {step1 && !isPending && 'Suivant'}{' '}
            {step2 && !isPending && 'Se connecter'} {isPending && 'En cours...'}
            <GrFormNext className="h-5 w-5" />
          </Button>
          <div className="text-center w-full text-sm">
            Si vous êtes nouveau,{' '}
            <Link href="/signup">
              <Button
                variant="ghost"
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
