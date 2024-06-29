import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import React from 'react';

const LetStart = () => {
  return (
    <div className="py-14 bg-cyan-50/80">
      <div className="container">
        <div className="text-center max-w-screen-lg mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold leading-snug">
            Quand envoyer de l'argent est crucial, vous pouvez compter votre
            compte
          </h1>
          <div className="text-lg font-bold py-8">
            Envoyer de l'argent à vos proches peut être un véritable casse-tête.
            Il est bien plus rassurant de connaître à l'avance les frais et le
            délai de livraison. Quoi qu'il en soit, nous sommes en mesure de
            vous aider pour vos transferts de fonds. Chez Remitly, notre
            processus de transfert est rapide, abordable et sécurisé. Vous
            saurez le coût total et le délai de livraison avant d'envoyer au
            transfert. Choisissez le mode de paiement qui vous convient, par
            carte de débit ou de crédit. Inscrivez-vous et envoyez de l'argent
            en ligne dès aujourd'hui.
          </div>
          <div className="py-4">
            <Button className="rounded-full py-6 px-8" variant={'default'}>
              Créer un compte maintenant
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetStart;
