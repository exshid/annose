'use client'
import React from "react";

interface DarkModeContextValue {
  classes: string;
  isDark: boolean
}

const DarkMode = React.createContext<DarkModeContextValue>({
  isDark: false,
});

export default DarkMode;