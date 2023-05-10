//@ts-nocheck 
'use client'
import React, { useState, useEffect } from 'react';
import DarkMode from "./darkmode-context";

const DarkModeProvider = (props) => {

    const [isDark, setIsDark] = useState(null);
    const [classes, setClasses] = useState('dark scroll-pt-16 overflow-auto overscroll-none jakarta-title');

          const darkMode = localStorage.getItem("theme");
    
          setIsDark(darkMode);
        console.log(darkMode);
    

    useEffect(() => {
        if (isDark === 'dark') {
        setClasses('dark scroll-pt-16 overflow-auto overscroll-none jakarta-title')
        }

    }, [isDark])

    return <DarkMode.Provider value={classes}>
        {props.children}
    </DarkMode.Provider>
}


export default DarkModeProvider