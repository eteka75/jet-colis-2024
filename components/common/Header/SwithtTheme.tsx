'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { FiMoon, FiSun, FiSunset } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { BsMoon } from 'react-icons/bs';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
interface NavbarProps {
  isAuthenticated: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const SwithtTheme: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, [setTheme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // document.documentElement.className = newTheme;
  };

  if (!isClient) {
    return null;
  }
  return (
    <Button
      variant="ghost"
      size="icon"
      className="hover:bg-none active:bg-none w-9 h-9  rounded-full"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default SwithtTheme;
