import { cn } from '@/src/lib/utils';
import React from 'react';

const TopSteps = ({ stepIndex }: { stepIndex: number }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div
          className={cn(
            'text-xs text-start',
            stepIndex >= 1 ? 'font-bold' : 'opacity-70'
          )}
        >
          <div
            className={cn(
              'rounded-full font-bold bg-accent py-1 mb-2',
              stepIndex >= 1 ? 'bg-primary' : 'bg-accent'
            )}
          ></div>
          Détails du trajet
        </div>
        <div
          className={cn(
            'text-xs text-start',
            stepIndex >= 2 ? 'font-bold' : 'opacity-70'
          )}
        >
          <div
            className={cn(
              'rounded-full font-bold bg-accent py-1 mb-2',
              stepIndex >= 2 ? 'bg-primary' : 'bg-accent'
            )}
          ></div>
          Description <span className="hidden md:flex">de l'offre</span>
        </div>
        <div
          className={cn(
            'text-xs text-start',
            stepIndex >= 3 ? 'font-bold' : 'opacity-70'
          )}
        >
          <div
            className={cn(
              'rounded-full font-bold bg-accent py-1 mb-2',
              stepIndex >= 3 ? 'bg-primary' : 'bg-accent'
            )}
          ></div>
          Résumé
        </div>
      </div>
      {stepIndex < 3 && (
        <div className="text-xs opacity-70 mt-4">* Les champs obligatoires</div>
      )}
    </div>
  );
};

export default TopSteps;
