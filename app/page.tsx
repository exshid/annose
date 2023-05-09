import React from 'react';
import { motion, useScroll, useSpring } from "framer-motion";
import { type Metadata } from 'next/types';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { FileText } from 'lucide-react';
import { NameCard} from '@/components/name' ;
import { blogConfig } from '@/config';
import { Button } from '@/components/button';
import { HeroSection } from '@/components/hero-section';
import { PostCard } from '@/components/post-card';
import { Contact } from '@/components/contact';
import {PhotoCard} from '@/components/photocard';
import {Intro} from '@/components/intro';
import {Service} from '@/components/service';
import {Books} from '@/components/books';

const { title, description } = blogConfig.pages.home;

const ogImage = {
  url: `${blogConfig.url}/og`,
};

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    url: blogConfig.url,
    title,
    description,
    images: [ogImage],
  },
  twitter: {
    description,
    images: ogImage,
    card: 'summary_large_image',
  },
};

export default function Home() {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);
    
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>

<div className="flex h-full flex-col pb-12">
<PhotoCard/>
<Intro/>
<Books/>
<Service/>
<Contact/>
 {/* 
      <section className="flex w-full flex-col">
      {latestPosts.map((post) => (
        <PostCard key={post._id} post={post} />
        ))}
        <Button          href="/posts"
        label="All Posts"
        className="place-self-end"
        icon={<FileText className="h-4 w-4" />}
        />
        </section>
      */} 

    </div>
      </>

  );
}
