import React from 'react';

type ProfileCardContentProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

const ProfileCardContent: React.FC<ProfileCardContentProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <>
      {icon && <div className="mb-2">{icon}</div>}
      <h1 className="font-bold">{title}</h1>
      <div className="opacity-80 text-sm">{description}</div>
    </>
  );
};

export default ProfileCardContent;
