'use client';

import {
  AtSign,
  Copyright,
  Facebook,
  Twitter,
} from 'lucide-react';

import { blogConfig } from '@/config';
import { Tooltip } from '@/components/tooltip';

export function Footer() {
  const { footerLinks } = blogConfig;
      <div className="flex flex-row flex-wrap justify-center gap-4 max-xs:px-16">
        {footerLinks?.facebook && (
          <a
            href={footerLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              id="facebook"
              className="icon-base"
              data-tooltip-content="My facebook profile"
              aria-label="My facebook profile"
            />
            <Tooltip anchorId="facebook" />
          </a>
        )}
        {footerLinks?.twitter && (
          <a
            href={footerLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              id="twitter"
              className="icon-base"
              data-tooltip-content="My Twitter profile"
              aria-label="My Twitter profile"
            />
            <Tooltip anchorId="twitter" />
          </a>
        )}
        
        {footerLinks?.email && (
          <a href={`mailto:${footerLinks.email}`}>
            <AtSign
              id="email"
              className="icon-base"
              data-tooltip-content="My Email"
              aria-label="My Email"
            />
            <Tooltip anchorId="email" />
          </a>
        )}
        
      </div>

  return (
    <footer className="relative border-t border-t-slate-300 min-h-[55px] flex h-full w-full flex-col items-center justify-center space-y-4">

      <div className="flex h-6 flex-row items-center justify-center space-x-1 text-slate-600 dark:text-slate-300">
        <Copyright className="h-4 w-4" aria-label="Copyright" />
        <span className="text-xs xs:text-sm">2023 · {blogConfig.author}</span>
      </div>

      <button
        className="absolute left-8 bottom-4 h-full w-fit"
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
      >
        <svg
          id="scroll-to-top"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="48"
          viewBox="0 0 24 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon-base h-12"
          viewTarget="0 0 24 48"
          aria-label="Scroll to top"
          data-tooltip-content="Scroll to top"
        >
          <line x1="12" y1="38" x2="12" y2="5"></line>
          <polyline points="5 12 12 5 19 12"></polyline>
        </svg>
        <Tooltip anchorId="scroll-to-top" place="right" />
      </button>
    </footer>
  );
}
