'use client';
import React, { useEffect, useState } from 'react';
import { MdOutlineLightMode } from 'react-icons/md';
import { FiMoon, FiSun, FiSunset } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { MoonIcon } from '@radix-ui/react-icons';
import { BsMoon } from 'react-icons/bs';
interface NavbarProps {
  isAuthenticated: boolean;
  darkMode: boolean;
  toggleDarkMode: () => void;
}
const SwithtTheme: React.FC<NavbarProps> = () => {
  const { setTheme, theme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.className = savedTheme;
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // document.documentElement.className = newTheme;
  };

  if (!isClient) {
    return null;
  }
  return (
    <div>
      <button
        onClick={toggleTheme}
        className="text-gray-600 p-2 rounded-sm hover:bg-slate-100 dark:text-gray-300"
      >
        {theme === 'light' ? (
          <FiMoon className="h-5 w-5 " />
        ) : (
          <FiSunset className="h-5 font-light w-5" />
        )}
      </button>
    </div>
  );
};

export default SwithtTheme;
