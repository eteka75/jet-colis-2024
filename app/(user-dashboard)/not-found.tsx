// app/not-found.tsx
import React from 'react';
import Link from 'next/link';

const GlobalNotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Non Trouvée</h1>
      <p>Oups ! La page que vous cherchez n'existe pas.</p>
      <Link href="/">Retourner à l'accueil</Link>
    </div>
  );
};

export default GlobalNotFound;
