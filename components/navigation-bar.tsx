//@ts-nocheck 
import NavLink from './NavLink';
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
      
      <NavLink href="/">
        <span className="bg-clip-text text-transparent scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark">
        Home
        </span>
      </NavLink>
      <NavLink
        href="/about"> 
        <span className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        About
        </span>
      </NavLink>
      <Link
    href='/#books' activeClassName="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Books
      </Link>
         
      <a
        href="#services"
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Editorial Services
      </a>
      <a
        href="#contact"
        className="scroll-smooth transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Contact
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
