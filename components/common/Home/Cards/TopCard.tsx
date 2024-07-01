import React from 'react';

const TopCard = ({ message }: { message: string }) => {
  return <div className="h-80 w-72 border p-10 rounded-lg">{message}</div>;
};

export default TopCard;
