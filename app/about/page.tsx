import Image from 'next/image'
import placeholder from '../../public/images/placeholder.svg'

import { type Metadata } from 'next/types';
import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { FileText } from 'lucide-react';
import { NameCard} from '@/components/name' ;
import { blogConfig } from '@/config';
import { Button } from '@/components/button';

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

export default function About() {
  const latestPosts = allPosts
    .sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
    .slice(0, 3);

  return (
    <div className="flex h-full flex-col pb-12">
<div className="w-1/3 bg-lightdarkish"><Image
  src={placeholder}
  alt="picture of the author"
  width={450}
  height={450}
  className="rounded-full dark:bg-gray-500 bg-gradient-to-r from-rose-600 to-rose-900 aspect-square"
/>
</div>
<div className="w-2/3 bg-lightdarkish">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure facilis velit modi corrupti ratione et non libero enim dolore, quia excepturi vel ad delectus sit maxime tenetur esse eos.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident accusantium aut doloremque, quam corporis exercitationem quae atque quas cupiditate id? Earum autem fugiat modi. Dignissimos ipsa alias enim. Nemo?</div>
    </div>
  );
}
