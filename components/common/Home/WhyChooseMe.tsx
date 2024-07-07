import React from 'react';
import { FaInbox } from 'react-icons/fa';

const WhyChooseMe = () => {
  return (
    <div className=" py-20">
      <div className="container">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-2xl text-center leading-tight md:text-3xl lg:text-3xl font-medium">
            Découvrez pourquoi comment{' '}
            <span className="text-emerald-600">Colistify</span> change le monde
            d'envoie de couriers à travers le monde
          </h1>
        </div>
        <div>
          <div className="py-12 grid grid-cols-3 gap-4 lg:gap-6">
            <div className="text-center p-4 md:p-6 rounded-md">
              <p className="text-center">
                <FaInbox className="text-7xl mx-auto" />
              </p>
              <h3 className="text-xl lg:text-2xl font-bold my-2">
                Livraison en temps records
              </h3>
              <p className="leading-tight tracking-tighter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ea corporis sequi laudantiu
              </p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-md">
              <p className="text-center">
                <FaInbox className="text-7xl mx-auto" />
              </p>
              <h3 className="text-xl lg:text-2xl font-bold my-2">
                Livraison en temps records
              </h3>
              <p className="leading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ea corporis sequi laudantiu
              </p>
            </div>
            <div className="text-center p-4 md:p-6 rounded-md">
              <p className="text-center">
                <FaInbox className="text-7xl mx-auto" />
              </p>
              <h3 className="text-xl lg:text-2xl font-bold my-2">
                Livraison en temps records
              </h3>
              <p className="leading">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ea corporis sequi laudantiu
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMe;
