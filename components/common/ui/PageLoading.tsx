import React from 'react';

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center min-h bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600">Chargement...</p>
      </div>
    </div>
  );
};

export default PageLoading;
