'use client';
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({})
interface ThemeContextProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [isDark, setIsDark] = useState(false);
        const darkMode = localStorage.getItem("theme");
        if (darkMode === 'dark') {
          setIsDark(true)
        }
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
};
export const useThemeContext = () => useContext(ThemeContext);
