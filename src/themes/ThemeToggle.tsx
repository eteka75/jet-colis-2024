'use client';
import { Button } from '@/components/ui/button';
import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <Button
      variant="ghost"
      size={'sm'}
      onClick={() => {
        setTheme(theme == 'light' ? 'dark' : 'light');
      }}
    >
      <SunMedium
        size={20}
        className="rotate-0 scale-100 translate-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        size={20}
        className="absolute rotate-100 scale-0 translate-all dark:-rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle thème</span>
    </Button>
  );
};

export default ThemeToggle;
