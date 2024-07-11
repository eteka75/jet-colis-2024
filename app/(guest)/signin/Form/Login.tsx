'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Switch } from '@/components/ui/switch';
import OAuthButtons from '@/components/common/ui/OAuthButtons';
import LineSeparator from '@/components/common/ui/LineSeparator';
import { authenticate } from '@/src/lib/server-actions';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { PiLockKeyLight } from 'react-icons/pi';
import { IoIosAt } from 'react-icons/io';
import { z } from 'zod';
import { FiEdit2 } from 'react-icons/fi';
import { GrFormNext } from 'react-icons/gr';
import { emailSchema, passwordSchema } from '@/src/lib/validations';
import { redirect, useRouter, useSearchParams } from 'next/navigation';

const Login: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [step1, setStep1] = useState<boolean>(true);
  const [step2, setStep2] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const inputEmail = useRef<HTMLInputElement>(null);
  const inputPwd = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [callbackUrl, setCallbackUrl] = useState<string>('/');

  useEffect(() => {
    const url = searchParams.get('callbackUrl');
    if (url) {
      setCallbackUrl(url);
    }
  }, [searchParams]);

  useEffect(() => {
    if (step1 && inputEmail.current) {
      inputEmail.current.focus();
    }
    if (step2 && inputPwd.current) {
      inputPwd.current.focus();
    }
  }, [step1, step2]);

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

      const formData = new FormData();
      formData.append('email', email);
      formData.append('password', password);
      formData.append('callbackUrl', callbackUrl);

      // try {
      //   const result = await authenticate(undefined, formData);

      //   if (result?.message) {
      //     setErrorMessage(result.message);
      //   } else {
      //     router.push('/ddd'); // Redirection vers l'URL prévue après l'authentification réussie
      //   }
      // } catch (error) {
      //   setErrorMessage(
      //     'Une erreur est survenue pendant a connexion, veuillez réessayer !'
      //   );
      // } finally {
      //   setIsPending(false);
      // }

      try {
        const response = await authenticate(undefined, formData);

        if (response.message) {
          if (response.redirectUrl) {
            setEmailError('');
            setIsPending(true);
            router.push(response.redirectUrl); // Redirection vers l'URL après authentification réussie
          } else {
            setErrorMessage(response.message);
          }
        } else {
          setErrorMessage(
            'Oups,! Une erreur est survenue, veuillez réessayer !'
          );
        }
      } catch (error) {
        setErrorMessage(
          'Une erreur est survenue pendant la connexion, veuillez réessayer !'
        );
      } finally {
        setIsPending(false);
      }
    }
  };

  return (
    <div>
      <form id="loginForm" onSubmit={handleSubmit} method="POST">
        <div className="grid gap-4 overflow-auto">
          {errorMessage && (
            <div className="flex break-words w-full overflow-auto text-xs items-center text-red-500 gap-2 text-balance bg-red-50 p-2 px-4 border border-red-200 rounded-md">
              <MdOutlineErrorOutline className="h-5 w-5" />
              <div className="text-sm w-full break-words whitespace-pre-wrap overflow-x-auto">
                {errorMessage}
              </div>
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
                className="flex items-center font-bold text-center text-sm mb-2 opacity-80 md:text-start gap-1"
              >
                <FiEdit2 /> {email}
              </Link>
            )}

            {step1 && !step2 && (
              <>
                <div className="pb-2">
                  <Label>Votre adresse email</Label>
                </div>
                <div className="mx-1 grid gap-2">
                  <div className="relative">
                    <Input
                      ref={inputEmail}
                      className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                        emailError ? 'border-red-500' : 'border-gray-200'
                      }`}
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      autoFocus
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isPending}
                      placeholder="Email"
                    />
                    <IoIosAt className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 opacity-70 peer-focus:text-gray-900" />
                  </div>
                  {emailError && (
                    <p className="text-red-500 text-sm">{emailError}</p>
                  )}
                </div>
              </>
            )}

            {!step1 && step2 && (
              <div className="mx-1 grid gap-2">
                <div>
                  <Label>Votre mot de passe</Label>
                </div>
                <div className="relative">
                  <Input
                    ref={inputPwd}
                    className={`peer block w-full rounded-md border py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                      passwordError ? 'border-red-500' : 'border-gray-200'
                    }`}
                    id="password"
                    disabled={isPending}
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
                  <p className="text-red-500 py-2 text-sm">{passwordError}</p>
                )}
              </div>
            )}
          </div>

          <div>
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
              {step1 && !isPending && 'Suivant'}{' '}
              {step2 && !isPending && 'Se connecter'}{' '}
              {isPending && 'Connexion en cours...'}
              <GrFormNext className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </form>
      <div className="text-center mt-6 w-full text-sm">
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
      <div>
        <div className="pt-2">
          <LineSeparator>ou se connecter avec</LineSeparator>
        </div>
        <div className="py-4">
          <OAuthButtons />
        </div>
      </div>
    </div>
  );
};

export default Login;
