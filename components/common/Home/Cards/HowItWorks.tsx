import React from 'react';
import YoutubeEmbed from '@/components/common/ui/YoutubeEmbed';

const HowItWorks = () => {
  return (
    <div className="py-12 md:py-24 bg-light dark:bg-secondary">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 flex-col items-center order-1 lg:order-2">
          <div className="round-md bg-blend-lighten ">
            <YoutubeEmbed videoId="JYVUSIOr3vE" className={'rounded-md'} />
          </div>
          <div className="order-2 lg:order-1 ">
            <h2 className="text-3xl md:px-4 lg:text-4xl text-center md:text-start md:mb-4  font-bold py-4">
              Comment ça marche ?
            </h2>
            <div className="text-xl">
              <div className="border-b md:border-0 md:px-4 py-4 hover:bg-accent   flex gap-2 md:gap-4 flex-auto ">
                <div>1</div>
                <div>
                  <h3 className="text-lg font-bold">
                    {' '}
                    Créer et validez votre compte
                  </h3>
                  <p className="text-md text-muted-foreground ">
                    La création de votre compte en quelques étapes en
                    renseignant les informations élémentaires
                  </p>
                </div>
              </div>
              <div className="border-b md:px-4 py-4 hover:bg-accent  flex gap-2 md:gap-4 flex-auto md:border-b-0">
                <div>2</div>
                <div>
                  <h3 className="text-lg font-bold">
                    {' '}
                    Programmez votre voyage et acceptez vos colis
                  </h3>
                  <p className="text-md text-muted-foreground">
                    La création de votre compte en quelques étapes en
                    renseignant les informations élémentaires
                  </p>
                </div>
              </div>
              <div className="md:px-4 py-4 hover:bg-accent flex gap-2 md:gap-4 flex-auto">
                <div>3</div>
                <div>
                  <h3 className="text-lg font-bold">
                    {' '}
                    Livrez et recevez votre paie
                  </h3>
                  <p className="text-md text-muted-foreground ">
                    La création de votre compte en quelques étapes en
                    renseignant les informations élémentaires
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
