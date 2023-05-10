'use client';
// @ts-nocheck
import { useEffect, useState } from "react";

import { MinusSquare, Moon, PlusSquare, Search, Sun, Type } from 'lucide-react';
import { shallow } from 'zustand/shallow';

import { useSearchStore } from '@/stores/search-store';
import { useThemeStore } from '@/stores/theme-store';
import { Tooltip } from '@/components/tooltip';
import { cn } from '@/lib/utils';


type ToolbarProps = {
  fontControls: boolean;
  className?: string;
};

export function Toolbar({ fontControls, className }: ToolbarProps) {
  

  const [data, setData] = useState(null);

  useEffect(() => {
    // check if localStorage is available
    if (typeof window !== "undefined" && window.localStorage) {
      // get data from localStorage
      const storedData = localStorage.getItem("myData");

      // set state with data from localStorage
      setData(storedData);
    }
  }, []);

  const darkModeHandler = () => {
    // set data in localStorage
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setData("dark");
    }
    // update state with new data
  
    const lightModeHandler = () => {
      // set data in localStorage
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        setData("light");
      }
    

  
  const toggleSearch = useSearchStore((state) => state.toggleSearch);
  const isSearching = useSearchStore((state) => state.isSearching);
const completedProject = false;
  const {
        isSerif,
    isFontSizeMin,
    isFontSizeMax,
    toggleDark,
    toggleSerif,
    increaseFontSize,
    decreaseFontSize,
  } = useThemeStore(
    (state) => ({
      isSerif: state.isSerif,
      isFontSizeMin: state.isFontSizeMin,
      isFontSizeMax: state.isFontSizeMax,
      toggleDark: state.toggleDark,
      toggleSerif: state.toggleSerif,
      increaseFontSize: state.increaseFontSize,
      decreaseFontSize: state.decreaseFontSize,
    }),
    shallow,
    );
    const darkMode = localStorage.getItem("isDark");

    const toggleDarkAndApply = () => {
      if (darkMode === "true") {
        localStorage.setItem("darkMode", 'true');
        setIsDark(true);
      }else{
        setIsDark(false);
        localStorage.removeItem("darkMode");
      }
      toggleDark()
  
    
    document.querySelector('html')?.classList.toggle('dark');
  };

  return (
    <div
      className={cn(
        'flex h-8 w-fit flex-row items-center justify-end space-x-1',
        className,
      )}
    >
  {/* 
{completedProject && (
      <button onClick={toggleSearch}>
        <Search
          id="search"
          className={cn(
            'icon-base h-5 w-5 xs:h-6 xs:w-6',
            isSearching && 'text-accent/60 dark:text-accent-dark/80',
          )}
          data-tooltip-content="Search Posts"
          aria-label="Search Posts"
        />
        <Tooltip anchorId="search" />
      </button>
)}
      {fontControls && (
        <>
          <button
            onClick={decreaseFontSize}
            disabled={isFontSizeMin}
            className="group"
          >
            <MinusSquare
              id="decrease-font-size"
              className={cn(
                'icon-base h-5 w-5 xs:h-6 xs:w-6',
                'group-disabled:text-accent/60 dark:group-disabled:text-accent-dark/80',
              )}
              data-tooltip-content="Decrease font size"
              aria-label="Decrease font size"
            />
            <Tooltip anchorId="decrease-font-size" place="bottom" />
          </button>
          <button
            onClick={increaseFontSize}
            disabled={isFontSizeMax}
            className="group"
          >
            <PlusSquare
              id="increase-font-size"
              className={cn(
                'icon-base h-5 w-5 xs:h-6 xs:w-6',
                'group-disabled:text-accent/60 dark:group-disabled:text-accent-dark/80',
              )}
              aria-label="Increase font size"
              data-tooltip-content="Increase font size"
            />
            <Tooltip anchorId="increase-font-size" place="bottom" />
          </button>
        </>
      )}

      <button onClick={toggleSerif}>
        <Type
          id="serif"
          className={cn(
            'icon-base ml-auto h-5 w-5 xs:h-6 xs:w-6',
            isSerif && 'text-accent/60 dark:text-accent-dark/80',
          )}
          data-tooltip-content="Toggle serif font"
          aria-label="Toggle serif font"
        />
        <Tooltip anchorId="serif" place="bottom" />
      </button>
  */}

<button
        type="button"
        aria-label="Use Dark Mode"
        onClick={lightModeHandler}
        id="theme-toggle" className="transition hover:-translate-y-px"      >
          <Moon
            className="icon-base h-5 w-5 xs:h-6 xs:w-6"
            aria-label="Switch to light mode"
          />
      </button>

      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={darkModeHandler}
        id="theme-toggle" className="transition hover:-translate-y-px">
          <Sun
            className="icon-base h-5 w-5 xs:h-6 xs:w-6"
            aria-label="Switch to dark mode"
          />
      </button>

    </div>
  );
}
