//@ts-nocheck 
import Link from 'next/link';

import { BlogTitle } from '@/components/blog-title';
import { cn } from '@/lib/utils';
import { allPages } from '../.contentlayer/generated';

type NavigationBarProps = {
  className?: string;
};

export function NavigationBar({ className }: NavigationBarProps) {
  return (
    <div
      className={cn(
                'flex h-8 w-max flex-row items-center space-x-2 max-xs:text-sm sm:space-x-4 text-darkish dark:text-white',
        className,
      )}
    >
      
      <Link href="/">
        <span className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark">
        Home
        </span>
      </Link>
      <Link
        href="/about"> 
        <span className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        About
        </span>
      </Link>
      <Link
    href="/" as="#books" 
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Books
      </Link>
         
      <Link
        href="/" as="/#services"
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Editorial Services
      </Link>
      <Link
href="#contact" scroll={false} className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Contact
      </Link>


      {allPages.map((page) => (
        <Link
          href={page.url}
          key={page._id}
          className="font-semibold hover:text-accent dark:hover:text-accent-dark"
        >
          {page.title}
        </Link>
      ))}
    </div>
  );
}
