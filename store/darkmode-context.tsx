'use client';

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({})

export const ThemeContextProvider = ({ children }) => {
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
