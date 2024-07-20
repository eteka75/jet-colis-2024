import React from 'react';

const TopSteps = ({ stepIndex }: { stepIndex: number }) => {
  return (
    <div>
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse mb-6">
        <li
          className={`flex items-center ${
            stepIndex === 0
              ? 'text-primary dark:text-primary'
              : 'text-gray-500 dark:text-gray-400'
          } space-x-2.5 rtl:space-x-reverse`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border ${
              stepIndex === 0
                ? 'border-primary dark:border-primary'
                : 'border-gray-500 dark:border-gray-400'
            } rounded-full shrink-0`}
          >
            1
          </span>
          <span>
            <h3 className="font-medium leading-tight">Détails du trajet</h3>
            <p className="text-sm">Informations sur votre trajet</p>
          </span>
        </li>
        <li
          className={`flex items-center ${
            stepIndex === 1
              ? 'text-primary dark:text-primary'
              : 'text-gray-500 dark:text-gray-400'
          } space-x-2.5 rtl:space-x-reverse`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border ${
              stepIndex === 1
                ? 'border-primary dark:border-primary'
                : 'border-gray-500 dark:border-gray-400'
            } rounded-full shrink-0`}
          >
            2
          </span>
          <span>
            <h3 className="font-medium leading-tight">
              Description de l'offre
            </h3>
            <p className="text-sm">Description et types de colis</p>
          </span>
        </li>
        <li
          className={`flex items-center ${
            stepIndex === 2
              ? 'text-primary dark:text-primary'
              : 'text-gray-500 dark:text-gray-400'
          } space-x-2.5 rtl:space-x-reverse`}
        >
          <span
            className={`flex items-center justify-center w-8 h-8 border ${
              stepIndex === 2
                ? 'border-primary dark:border-primary'
                : 'border-gray-500 dark:border-gray-400'
            } rounded-full shrink-0`}
          >
            3
          </span>
          <span>
            <h3 className="font-medium leading-tight">Récapitulatif</h3>
            <p className="text-sm">Vérifiez et confirmez</p>
          </span>
        </li>
      </ol>
    </div>
  );
};

export default TopSteps;
