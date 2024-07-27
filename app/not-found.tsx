'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { ArrowLeft, HomeIcon } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="absolute left-1/2 top-1/2 mb-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center">
      <span className="bg-gradient-to-b from-foreground to-slate-800 bg-clip-text text-[10rem] font-extrabold leading-none text-transparent">
        404
      </span>
      <h2 className="font-heading my-2 text-2xl font-bold">
        Quelque chose s'est mal passé
      </h2>
      <p>Désolé, la page que vous recherchez n'existe pas ou a été déplacée.</p>
      <div className="mt-8 flex justify-center gap-2">
        <Button onClick={() => router.back()} variant="default" size="lg">
          <ArrowLeft className="h-4 w-4" /> Retour
        </Button>
        <Button
          onClick={() => router.push('/')}
          variant="ghost"
          size="lg"
          className="border gap-1 flex"
        >
          <HomeIcon className="h-4 w-4" /> Aller à l'accueil
        </Button>
      </div>
    </div>
  );
}
