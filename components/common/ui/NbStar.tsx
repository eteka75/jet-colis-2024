import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

interface NbStartProps {
  rating: number;
  className?: string; // Ajoutez ceci pour permettre l'utilisation de className
}

const NbStart: React.FC<NbStartProps> = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 opacity-70">
      <FaStar />
      <span>{rating < 1 ? 1 : rating.toFixed(1)}</span>
      {/* {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} className={className} />
      ))}
      {hasHalfStar && <FaStarHalfAlt className={className} />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} className={className} />
      ))} */}
    </div>
  );
};

export default NbStart;
