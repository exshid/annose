import React from 'react';
import { type Metadata } from 'next/types';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { FileText } from 'lucide-react';
import { blogConfig } from '@/config';
import { HeroSection } from '@/components/hero-section';
import { Contact } from '@/components/contact';
import PageWrapper from '@/components/wrapper';

import {PhotoCard} from '@/components/photocard';
import {Intro} from '@/components/intro';
import {Service} from '@/components/service';
import {Testimonials} from '@/components/testimonial';

import {Books} from '@/components/books';
import placeholder from '@/public/images/placeholder.svg'
import Image from 'next/image'

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
    
  return (
<PageWrapper>
<div className="flex h-full flex-col">
<PhotoCard/>
<Intro />
<Books/>
<Service/>
<Contact/>
 {/* 
<Testimonials/>
      */} 

    </div>
    </PageWrapper>
  );
}
