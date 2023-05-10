import React from 'react';
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

  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);
    
  return (

<div className="flex h-full flex-col pb-12">
<PhotoCard/>
<Intro />
<Books/>
<div className="w-64 carousel rounded-box">
  <div className="carousel-item w-full">
    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div> 
  <div className="carousel-item w-full">
    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
  </div>
</div>
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

  );
}
