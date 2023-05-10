//@ts-nocheck 
import '@/styles/globals.css';
import 'react-tooltip/dist/react-tooltip.css';
import { type Metadata } from 'next/types';
import { allPosts } from 'contentlayer/generated';
import { blogConfig } from '@/config';
import { Analytics } from '@/components/analytics';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Search } from '@/components/search';
import { cn } from '@/lib/utils';
import { useContext } from "react";
import DarkModeProvider from '@/store/DarkModeProvider';


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
  const { classes } = useContext(DarkModeProvider);


  return (
    <DarkModeProvider>

    <html
      lang="en"
      className={classes}
    >
      <head />
      <body className="min-h-screen w-full bg-white dark:bg-darkish">

        <header className="fixed top-0 z-50 w-11/12 sm:w-full">
            <Header />
          </header>
          <main className="w-11/12 sm:w-full">
            {children}
          </main>
          <section className="w-11/12 sm:w-full">
            <Footer />
          </section>
           <Search posts={allPosts} />
          <Analytics />
      </body>
    </html>
    </DarkModeProvider>
  );
}
