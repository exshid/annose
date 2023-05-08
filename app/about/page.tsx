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
    <div className="flex h-full py-12">
<div className="w-1/3 text-darkish dark:text-white"><Image
  src={placeholder}
  alt="picture of the author"
  width={550}
  height={650}
  />
</div>
<div className="w-2/3 text-darkish dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita rem dolorum tempora perspiciatis at id illo iure quaerat libero corrupti veritatis vel quibusdam minus aperiam, necessitatibus, consequuntur, nulla maxime! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repudiandae sequi ullam delectus fugit? Pariatur corrupti praesentium nesciunt? Reiciendis voluptatibus delectus a laudantium beatae illo, ab quaerat animi facilis neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure facilis velit modi corrupti ratione et non libero enim dolore, quia excepturi vel ad delectus sit maxime tenetur esse eos.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident accusantium aut doloremque, quam corporis exercitationem quae atque quas cupiditate id? Earum autem fugiat modi. Dignissimos ipsa alias enim. Nemo?</div>
    </div>
  
  );
}