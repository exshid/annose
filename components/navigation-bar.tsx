import Link from 'next/link';
import * as Scroll from 'react-scroll';
import { Link as ScrollLink, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
      <ScrollLink activeClass="active" to="books" spy={true} smooth={true} duration={250} >
      <Link
        href="/"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Books
      </Link>
      </ScrollLink>
      <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={250} >
      <Link
        href="/"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        About
      </Link>
      </ScrollLink>
      <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={250} >
      <Link
        href="/"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Contact
      </Link>
      </ScrollLink>
      <ScrollLink activeClass="active" to="services" spy={true} smooth={true} duration={250} >
      <Link
        href="/"
        className="transition hover:-translate-y-px font-semibold hover:text-accent dark:hover:text-accent-dark"
      >
        Editorial Services
      </Link></ScrollLink>

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
