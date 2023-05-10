'use client';
import { createContext, useContext, useEffect, useState } from "react";
interface ThemeContextValue {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProviderProps>({
  isDark: false,
  setIsDark: () => {},
});



const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
      if (typeof window !== "undefined" && window.localStorage) {
        const darkMode = localStorage.getItem("theme");
        if (darkMode === 'dark') {
          setIsDark(true)
        }
      }
    }, [isDark]);
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            {children}
        </ThemeContext.Provider>
    )
};
export const useThemeContext = () => useContext(ThemeContext);
