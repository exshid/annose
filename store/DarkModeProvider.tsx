//@ts-nocheck 
'use client'
import React, { useState, useEffect } from 'react';
import DarkMode from "./darkmode-context";

interface DarkModeProviderProps {
  children: React.ReactNode;
}

const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDark, setIsDark] = useState(null);
  const [classes, setClasses] = useState('dark scroll-pt-16 overflow-auto overscroll-none jakarta-title');

  useEffect(() => {
    // check if localStorage is available
    if (typeof window !== "undefined" && window.localStorage) {
      // get data from localStorage
      const darkMode = localStorage.getItem("theme");

      // set state with data from localStorage
      setIsDark(darkMode);
      console.log(darkMode);
    }
  }, []);

  useEffect(() => {
    if (isDark === 'dark') {
      setClasses('dark scroll-pt-16 overflow-auto overscroll-none jakarta-title')
    }
  }, [isDark])

  const darkContext = {
    classes: classes,
  }

  return (
    <DarkMode.Provider value={darkContext}>
      {children}
    </DarkMode.Provider>
  );
}

export default DarkModeProvider;