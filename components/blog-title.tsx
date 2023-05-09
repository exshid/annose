'use client';

import { blogConfig } from '@/config';
import { cn } from '@/lib/utils';

type BlogTitleProps = {
  className?: string;
};

export function BlogTitle({ className }: BlogTitleProps) {
  return (
    <div
      className={cn(
        'inline-flex w-full items-center justify-center',
        className,
      )}
    >
      <h1
        className={cn(
          'mx-0.5 whitespace-nowrap text-center font-semibold drop-shadow-sm',
          'text-darkish dark:text-white',
        )}
      >
        {blogConfig.titleParts ? (
          <>
            {blogConfig.titleParts[0]}
            <span className="px-px font-light">
              /
            </span>
            {blogConfig.titleParts[1]}
          </>
        ) : (
          blogConfig.title
        )}
      </h1>
    </div>
  );
}
