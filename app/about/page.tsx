import Image from 'next/image'
import placeholder from '../../public/images/placeholder.svg'
import { Contact } from '@/components/contact';
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
    <>
    <div className="flex h-full items-center flex-col w-full py-24 lg:pt-40">
      <p className="font-black heading-font px-2 md:px-5 lg:px-10 mb-10 xl:px-80 text-3xl md:text-4xl lg:text-5xl text-darkish dark:text-white">About Me</p>
      <div className="relative lg:rounded-2xl mb-10 w-full lg:w-9/12 flex flex-col lg:flex-row justify-between my-2 bg-gradient-to-r from-rose-600 to-rose-900 h-[60vh]">
      <Image
  src={placeholder}
  alt="picture of the author"
  className="w-full"
  layout="fill"
  objectFit="contain"
  objectPosition="center"
  /></div>
      <div className="w-full px-2 md:px-5 lg:px-10 xl:px-80 h-full pb-2 self-start"><p className="inline-block text-3xl md:text-4xl lg:text-5xl mr-5 text-darkish font-black dark:text-white heading-font">Hi, I am </p>
      <h1 className="heading-font inline-block font-black text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">{blogConfig.author}</h1></div>
<div className="px-2 md:px-5 lg:px-10 xl:px-80 w-full text-darkish items-center jakarta-font dark:text-white">
    <p className="py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate voluptatum vel in! Ipsa laborum, ipsam excepturi maxime corrupti aperiam nam. Similique cum animi enim reiciendis.</p><p className="py-2">Quas eius aliquid tempora aspernatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non temporibus laboriosam, ratione earum nisi debitis dignissimos quia consequuntur obcaecati! Expedita neque laboriosam eius dolore. Aliquid reprehenderit aut soluta nemo atque!
</p><p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab expedita rem dolorum tempora perspiciatis at id illo iure quaerat libero corrupti veritatis vel quibusdam minus aperiam, necessitatibus, consequuntur, nulla maxime! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
<p className="py-2">
Non repudiandae sequi ullam delectus fugit? Pariatur corrupti praesentium nesciunt? Reiciendis voluptatibus delectus a laudantium beatae illo, ab quaerat animi facilis neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto iure facilis velit modi corrupti ratione et non libero enim dolore, quia excepturi vel ad delectus sit maxime tenetur esse eos.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis provident accusantium aut doloremque, quam corporis exercitationem quae atque quas cupiditate id? Earum autem fugiat modi. Dignissimos ipsa alias enim. Nemo?</p>
<div className="w-full h-full py-2 self-start"><h2 className="inline-block text-2xl md:text-3xl lg:text-4xl pb-5 text-gray-800 font-black dark:text-white heading-font">
  My Services</h2>
  <div className="w-full border dark:border-white	border-slate-300 rounded-lg p-5">
    <h3 className="text-gray-800 dark:text-white font-bold text-xl">Book Edit</h3>
    <p className="text-darkish dark:text-white jakarta-font">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam sequi, fugit ipsum placeat ad laudantium.</p>
  </div>
  </div>
</div>
    </div>
    <Contact/>
    </>
  
  );
}