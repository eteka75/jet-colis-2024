import Image from 'next/image';
import React from 'react';
import img from "@/public/assets/images/easyapp.png";

const EsayServices = () => {
  return (
    <div className="border-b">
      <div className="container text-center pt-6 md:pt-12">
        <h1 className="scroll-m-20 pt-4 md:pt-8 max-w-3xl font-light mx-auto text-4xl lg:text-[4rem] mb-12 lg:mb-24  tracking-tight lg:text-5xl">
          Avec <span className="text-primary font-medium">Colisfly</span>,
          rentabilisez votre voyage.
        </h1>
        <div>
          <Image
            src={img}
            height={300}
            width={500}
            alt="Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default EsayServices;
