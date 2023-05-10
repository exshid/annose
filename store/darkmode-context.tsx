'use client'
import React from "react";

interface DarkModeContextValue {
  isDark: boolean
}

const DarkMode = React.createContext<DarkModeContextValue>({
  isDark: false,
});

export default DarkMode;