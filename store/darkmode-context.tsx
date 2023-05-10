'use client'
import React from "react";

interface DarkModeContextValue {
  classes: string;
}

const DarkMode = React.createContext<DarkModeContextValue>({
  classes: "dark scroll-pt-16 overflow-auto overscroll-none jakarta-title",
});

export default DarkMode;