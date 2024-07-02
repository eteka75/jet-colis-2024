import PageLoading from '@/components/common/ui/PageLoading';
import React from 'react';

const loading = () => {
  return (
    <div className="flex items-center justify-center py-40 h-screen bg-accent">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
        <p className="mt-4 opacity-80">Chargement...</p>
      </div>
    </div>
  );
};

export default loading;
