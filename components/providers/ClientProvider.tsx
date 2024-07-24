// src/components/ClientOnlyProvider.tsx
'use client'; // Important pour indiquer que ce composant doit être utilisé côté client

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/src/redux/store';

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
