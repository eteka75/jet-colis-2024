import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FaqInfo = () => {
  return (
    <div className=" py-8 md:py-20 bg-slate-50_">
      <div className="container">
        <div className="md:max-w-screen-md  mx-auto border rounded-xl py-4 md:py-8">
          <div className="text-center md:py-4 ">
            <h1 className="text-3xl lg:text-4xl font-bold">FAQ</h1>
          </div>
          <Accordion type="single" className=" px-4 md:px-8" collapsible>
            <AccordionItem value="question1">
              <AccordionTrigger className="accordion-label lg:text-lg text-start ">
                Comment fonctionne l'envoi de colis entre particuliers sur votre
                site ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Sur notre site, vous pouvez publier des annonces pour envoyer
                  ou recevoir des colis. Les utilisateurs peuvent proposer un
                  trajet et spécifier les détails du colis à envoyer.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question2">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Quels types de colis puis-je envoyer avec votre service ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Vous pouvez envoyer divers types de colis, y compris des
                  articles personnels, des documents, des cadeaux, etc.
                  Assurez-vous de respecter nos directives sur ce qui peut être
                  envoyé.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question3">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Comment puis-je payer pour l'envoi d'un colis ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Les modalités de paiement sont convenues directement entre
                  l'expéditeur et le transporteur. Nous recommandons d'utiliser
                  des méthodes de paiement sécurisées et de suivre nos conseils
                  pour des transactions sûres.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question4">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Comment assurer la sécurité de mes colis pendant le transport ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Nous encourageons nos utilisateurs à choisir des transporteurs
                  de confiance et à emballer soigneusement leurs colis.
                  Assurez-vous de communiquer clairement vos attentes et
                  d'utiliser les options d'assurance disponibles si nécessaire.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question5">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Quelles sont les responsabilités des expéditeurs et des
                transporteurs ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Les expéditeurs sont responsables de l'exactitude des
                  informations fournies et de l'emballage sécurisé des colis.
                  Les transporteurs sont responsables de la livraison en temps
                  voulu et dans l'état promis.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question6">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Comment puis-je contacter un transporteur pour discuter des
                détails de l'envoi ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Vous pouvez utiliser notre système de messagerie interne pour
                  communiquer avec les transporteurs potentiels. Assurez-vous de
                  clarifier tous les détails avant d'accepter d'envoyer un
                  colis.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question7">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Quelles sont les informations nécessaires pour publier une
                annonce d'envoi de colis ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Vous devrez fournir des détails tels que les dimensions du
                  colis, le poids estimé, les adresses de départ et d'arrivée,
                  ainsi que les dates de disponibilité. Plus vous fournirez
                  d'informations précises, mieux ce sera.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question8">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Comment puis-je annuler ou modifier une annonce d'envoi de colis
                ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Vous pouvez annuler ou modifier une annonce avant qu'un
                  transporteur ne soit confirmé pour le trajet. Une fois qu'un
                  transporteur est engagé, veuillez communiquer directement avec
                  lui pour discuter des modifications nécessaires.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question9">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Quelles sont les garanties en cas de perte ou de dommage d'un
                colis ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Nous encourageons l'utilisation de services d'assurance pour
                  couvrir les colis de valeur. Les arrangements spécifiques
                  doivent être convenus entre l'expéditeur et le transporteur
                  pour chaque envoi.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="question10">
              <AccordionTrigger className="accordion-label lg:text-lg text-start">
                Comment puis-je laisser un avis sur l'expérience d'envoi ou de
                transport ?
              </AccordionTrigger>
              <AccordionContent className="accordion-content">
                <p>
                  Une fois l'envoi terminé, vous pouvez laisser un avis sur le
                  profil du transporteur ou de l'expéditeur. Votre feedback est
                  important pour maintenir la qualité du service et aider les
                  autres utilisateurs.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FaqInfo;
