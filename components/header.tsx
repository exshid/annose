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
  const isPostPage =
    layoutSegment[0] === blogConfig.pages.posts.url.substring(1) &&
    !!layoutSegment[1];

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
  <div className="navbar-start lg:hidden">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] lg:h-[25px] lg:w-[25px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact !text-base dropdown-content mt-3 p-2 shadow dark:bg-lightdarkish bg-darkerlight rounded-box w-auto">
      <NavigationBar className="flex-grow flex-column h-auto max-xs:mr-2" />
    </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu-horizontal px-1">
    <NavigationBar className="flex-grow max-xs:mr-2" />

    </ul>
  </div>
  <div className="navbar-end">
  <Toolbar fontControls={isPostPage} className="ml-auto" />
  </div>
</div>


  </>
  );
}
