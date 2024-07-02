import { redirect } from 'next/navigation';
import React from 'react';

const profile = () => {
  return redirect('/user/profil');
};

export default profile;
