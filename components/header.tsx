'use client';

import { useEffect, useRef, useState } from 'react';
import { useSelectedLayoutSegments } from 'next/navigation';

import { blogConfig } from '@/config';
import { NavigationBar } from '@/components/navigation-bar';
import { Toolbar } from '@/components/toolbar';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  const layoutSegment = useSelectedLayoutSegments();
  
  useEffect(() => {
    // sync scroll position with state
    setScrollTop(document.documentElement.scrollTop);

    // update state on scroll
    const handleScroll = () => {
      setScrollTop(document.documentElement.scrollTop);
    };
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  return (

<>

<div ref={headerRef} className={cn(
        headerRef.current && scrollTop > headerRef.current.clientHeight
          ? 'navbar border-b border-b-slate-300 text-darkish dark:text-white bg-white dark:bg-darkish py-2 dark:border-b-slate-600'
          : 'navbar py-8 bg-transparent ',
        'flex flex-row items-center justify-between px-4 xs:px-8 text-darkish dark:text-white',
        'transition-[padding,background-color] duration-300 ease-in-out navbar')}>
</div>


  </>
  );
}
