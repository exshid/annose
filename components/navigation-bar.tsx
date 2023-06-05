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
      <Link href="/"
      className="transition hover:-translate-y-px font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent hover:text-accent dark:hover:text-accent-dark">
        Home
      </Link>
      <a
        href="#books"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Books
      </a>
      <a
        href="#about"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        About
      </a>
      <a
        href="#contact"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Contact
      </a>

      <a
        href="#services"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Editorial Services
      </a>

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
