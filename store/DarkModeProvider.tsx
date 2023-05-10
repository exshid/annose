//@ts-nocheck 
'use client'
import React, { useState, useEffect } from 'react';
import DarkMode from "./darkmode-context";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  const [classes, setClasses] = useState('');

  useEffect(() => {
    // check if localStorage is available
    if (typeof window !== "undefined" && window.localStorage) {
      // get data from localStorage
      const darkMode = localStorage.getItem("theme");

      // set state with data from localStorage
      if (darkMode === 'dark') {
        setIsDark(true)
      }
    }
  }, [isDark, darkMode]);

  return (
    <DarkMode.Provider value={isDark}>
      {children}
    </DarkMode.Provider>
  );
}

export default DarkModeProvider;