import '@/styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import { Newsreader, Red_Hat_Display } from 'next/font/google';
import { type Metadata } from 'next/types';
import { allPosts } from 'contentlayer/generated';

import { blogConfig } from '@/config';
import { Analytics } from '@/components/analytics';
import { FontStyleProvider } from '@/components/font-style-provider';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Search } from '@/components/search';
import { cn } from '@/lib/utils';

const fontSans = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat',
});

const fontSerif = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: blogConfig.title,
    template: `${blogConfig.title} | %s`,
  },
  openGraph: {
    title: {
      default: blogConfig.title,
      template: `${blogConfig.title} | %s`,
    },
  },
  twitter: {
    title: {
      default: blogConfig.title,
      template: `${blogConfig.title} | %s`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        'scroll-pt-16 overflow-auto overscroll-none',
        fontSans.variable,
        fontSerif.variable,
      )}
    >
      <head />
      <body className="grid min-h-screen grid-cols-1 grid-rows-layout bg-slate-200 dark:bg-lightdarkish sm:grid-cols-layout">
        <FontStyleProvider>
          <section className="sticky top-0 z-30 col-span-1 row-span-1 row-start-1 h-full self-start sm:col-start-2">
            <Header />
          </section>
          <main className="col-span-1 row-start-2 sm:col-start-2">
            {children}
          </main>
          <section className="col-span-3 row-span-1 row-start-3 sm:col-span-1 sm:col-start-2">
            <Footer />
          </section>
          <div // left column
            className={cn(
              'col-span-1 col-start-1 row-span-3 row-start-1 hidden sm:block',
              'bg-white',
              'dark:bg-lightdarkish',
            )}
          >
            <div className="invisible h-full w-full  dark:visible" />
          </div>
          <div // right column
            className={cn(
              'col-span-1 col-start-3 row-span-3 row-start-1 hidden sm:block',
              'bg-white',
              'dark:bg-lightdarkish',
            )}
          >
            <div className="invisible h-full w-full dark:visible" />
          </div>
          <Search posts={allPosts} />
          <Analytics />
        </FontStyleProvider>
      </body>
    </html>
  );
}
