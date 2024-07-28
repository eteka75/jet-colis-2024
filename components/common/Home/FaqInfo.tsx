import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    value: 'question1',
    question:
      "Comment fonctionne l'envoi de colis entre particuliers sur votre site ?",
    answer:
      'Sur notre site, vous pouvez publier des annonces pour envoyer ou recevoir des colis. Les utilisateurs peuvent proposer un trajet et spécifier les détails du colis à envoyer.',
  },
  {
    value: 'question2',
    question: 'Quels types de colis puis-je envoyer avec votre service ?',
    answer:
      'Vous pouvez envoyer divers types de colis, y compris des articles personnels, des documents, des cadeaux, etc. Assurez-vous de respecter nos directives sur ce qui peut être envoyé.',
  },
  {
    value: 'question3',
    question: "Comment puis-je payer pour l'envoi d'un colis ?",
    answer:
      "Les modalités de paiement sont convenues directement entre l'expéditeur et le transporteur. Nous recommandons d'utiliser des méthodes de paiement sécurisées et de suivre nos conseils pour des transactions sûres.",
  },
  {
    value: 'question4',
    question: 'Comment assurer la sécurité de mes colis pendant le transport ?',
    answer:
      "Nous encourageons nos utilisateurs à choisir des transporteurs de confiance et à emballer soigneusement leurs colis. Assurez-vous de communiquer clairement vos attentes et d'utiliser les options d'assurance disponibles si nécessaire.",
  },
  {
    value: 'question5',
    question:
      'Quelles sont les responsabilités des expéditeurs et des transporteurs ?',
    answer:
      "Les expéditeurs sont responsables de l'exactitude des informations fournies et de l'emballage sécurisé des colis. Les transporteurs sont responsables de la livraison en temps voulu et dans l'état promis.",
  },
  {
    value: 'question6',
    question:
      "Comment puis-je contacter un transporteur pour discuter des détails de l'envoi ?",
    answer:
      "Vous pouvez utiliser notre système de messagerie interne pour communiquer avec les transporteurs potentiels. Assurez-vous de clarifier tous les détails avant d'accepter d'envoyer un colis.",
  },
  {
    value: 'question7',
    question:
      "Quelles sont les informations nécessaires pour publier une annonce d'envoi de colis ?",
    answer:
      "Vous devrez fournir des détails tels que les dimensions du colis, le poids estimé, les adresses de départ et d'arrivée, ainsi que les dates de disponibilité. Plus vous fournirez d'informations précises, mieux ce sera.",
  },
  {
    value: 'question8',
    question:
      "Comment puis-je annuler ou modifier une annonce d'envoi de colis ?",
    answer:
      "Vous pouvez annuler ou modifier une annonce avant qu'un transporteur ne soit confirmé pour le trajet. Une fois qu'un transporteur est engagé, veuillez communiquer directement avec lui pour discuter des modifications nécessaires.",
  },
  {
    value: 'question9',
    question:
      "Quelles sont les garanties en cas de perte ou de dommage d'un colis ?",
    answer:
      "Nous encourageons l'utilisation de services d'assurance pour couvrir les colis de valeur. Les arrangements spécifiques doivent être convenus entre l'expéditeur et le transporteur pour chaque envoi.",
  },
  {
    value: 'question10',
    question:
      "Comment puis-je laisser un avis sur l'expérience d'envoi ou de transport ?",
    answer:
      "Une fois l'envoi terminé, vous pouvez laisser un avis sur le profil du transporteur ou de l'expéditeur. Votre feedback est important pour maintenir la qualité du service et aider les autres utilisateurs.",
  },
];

const FaqInfo = () => {
  return (
    <div className=" md:py-20 bg-slate-50_ pb-8 bg-background">
      <div className="container-fluid">
        <div className="md:max-w-screen-lg mx-auto rounded-xl py-4 md:py-8">
          <div className="  md:px-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-center md:text-start">
              FAQ
            </h1>
          </div>
          <Accordion type="single" className="md:px-8" collapsible>
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border my-2 px-4 rounded-md bg-background shadow-sm"
              >
                <AccordionTrigger className="accordion-label lg:text-lg text-start">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="accordion-contentprose prose-lg lg:prose-xl max-w-none  opacity-90">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqInfo;
