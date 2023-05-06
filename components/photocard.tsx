import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type PhotoCardProps = {
    photo: string;
  };
  
  export function PhotoCard() {
    
    return (
        <div className="flex h-screen justify-around divide-slate-500 dark:divide-white divide-x-2 items-center">
    <HeroSection/>
<div className='bg-white h-full w-1/2 flex justify-center dark:bg-lightdarkish pt-5'>
    <Image 
          src={placeholder}
          alt="Picture of the author"
        className="!relative h-full object-cover w-11/12 pt-5"/> </div>
    </div>
        );
  }
