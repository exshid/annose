//@ts-nocheck 
import Image from 'next/image'
import placeholder from '../../public/images/placeholder.svg'
import { Contact } from '@/components/contact';
import { type Metadata } from 'next/types';
import { blogConfig } from '@/config';
import PageWrapper from '@/components/wrapper';

const { title, description } = blogConfig.pages.home;
const pageTitle = "Policies — "
const ogImage = {
  url: `${blogConfig.url}/og`,
};

export const metadata: Metadata = {
    pageTitle,
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
    <PageWrapper>
    <div className="flex h-full items-center flex-col w-full py-24 lg:pt-40">
      <p className="font-black heading-font px-2 md:px-5 lg:px-10 mb-10 xl:px-80 text-3xl md:text-4xl lg:text-5xl text-darkish dark:text-white">Terms & Conditions</p>
      <div className="relative lg:rounded-2xl mb-10 w-full lg:w-9/12 flex flex-col lg:flex-row justify-between my-2 bg-gradient-to-r from-rose-600 to-rose-900 h-[60vh]">
      <Image
  src={placeholder}
  alt="picture of the author"
  className="w-full"
  layout="fill"
  objectFit="contain"
  objectPosition="center"
  /></div>
      <div className="w-full px-2 md:px-5 lg:px-10 xl:px-80 h-full pb-2 self-start"></div>
<div className="px-2 md:px-5 lg:px-10 xl:px-80 w-full text-darkish items-center jakarta-font dark:text-white">
    <p className="py-2 whitespace-pre-wrap">Terms & Conditions text here</p>


</div>
    </div>
    <Contact/>
    </PageWrapper>
  
  );
}