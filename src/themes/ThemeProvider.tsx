'use client';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React from 'react';

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
