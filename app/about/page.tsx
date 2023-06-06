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

  return (
    <div className="flex h-full flex-col w-full py-24 lg:pt-80">
      <p className="font-black px-2 md:px-5 lg:px-10 xl:px-80 text-5xl text-darkish dark:text-white">About Me</p>
      <div className="relative w-full flex flex-col lg:flex-row justify-between my-2 bg-gradient-to-r from-rose-600 to-rose-900 h-auto lg:h-[60vh]">
      <div className="w-auto h-full"><p className="inline-block text-8xl mr-5 text-white">Hi, I am </p><h1 className="inline-block font-black text-8xl text-white">A. B. CDEF</h1></div>
      <div className="w-auto h-full">
      <Image
  src={placeholder}
  alt="picture of the author"
  className="w-full"
  layout="fill"
  objectFit="contain"
  objectPosition="right"
  /></div>
      </div>
<div className="px-2 md:px-5 lg:px-10 xl:px-80 w-full text-darkish items-center jakarta-font dark:text-white">
    <p className="py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate voluptatum vel in! Ipsa laborum, ipsam excepturi maxime corrupti aperiam nam. Similique cum animi enim reiciendis.</p><p className="py-2">Quas eius aliquid tempora aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non temporibus laboriosam, ratione earum nisi debitis dignissimos quia consequuntur obcaecati! Expedita neque laboriosam eius dolore. Aliquid reprehenderit aut soluta nemo atque!
</p><p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita rem dolorum tempora perspiciatis at id illo iure quaerat libero corrupti veritatis vel quibusdam minus aperiam, necessitatibus, consequuntur, nulla maxime! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
<p className="py-2">
Non repudiandae sequi ullam delectus fugit? Pariatur corrupti praesentium nesciunt? Reiciendis voluptatibus delectus a laudantium beatae illo, ab quaerat animi facilis neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure facilis velit modi corrupti ratione et non libero enim dolore, quia excepturi vel ad delectus sit maxime tenetur esse eos.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident accusantium aut doloremque, quam corporis exercitationem quae atque quas cupiditate id? Earum autem fugiat modi. Dignissimos ipsa alias enim. Nemo?</p></div>
    </div>
  
  );
}