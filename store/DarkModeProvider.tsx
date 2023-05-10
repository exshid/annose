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
const values ={ isDark:isDark}
  return (
    <DarkMode.Provider value={values}>
      {children}
    </DarkMode.Provider>
  );
}
export default DarkModeProvider;