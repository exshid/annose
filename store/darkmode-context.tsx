'use client';
import { createContext, useContext, useEffect, useState } from "react";
interface ThemeContextValue {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ThemeContextProviderProps {
  children: React.ReactNode;
  value: Omit<ThemeContextValue, "isDark">;
}

const ThemeContext = createContext<ThemeContextValue>({
  isDark: false,
  setIsDark: () => {},
});

const ThemeContextProvider = ({ children, value }: ThemeContextProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const darkMode = localStorage.getItem("theme");
      if (darkMode === "dark") {
        setIsDark(true);
      }
    }
  }, []);


  return (
    <ThemeContext.Provider value={isDark}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
