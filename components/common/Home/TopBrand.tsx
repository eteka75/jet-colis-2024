import React from 'react';
import Marquee from 'react-fast-marquee';
import TopCard from './Cards/TopCard';

const TopBrand = () => {
  return (
    <div className="py-8 md:py-12 lg:py-18">
      <div className="">
        <Marquee pauseOnHover={true} autoFill={true} gradient={false}>
          <div className="flex gap-4 space-x-4 p-4">
            <TopCard
              message="I can be a React component, multiple React components, or just some
          text."
            />
            <TopCard
              message="I can be a React component, multiple React components, or just some
          text."
            />
            <TopCard
              message="I can be a React component, multiple React components, or just some
          text."
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TopBrand;
