'use client';
import { useState } from 'react';

const useTranslation = () => {
  const [formatMessage, setformatMessage] = useState('');
  return {
    t: (id: string, values = {}) => setformatMessage(id),
  };
};

export default useTranslation;
