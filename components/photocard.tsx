import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type PhotoCardProps = {
    photo: string;
  };
  
  export function PhotoCard() {
    
    return (
        <div className="flex flex-col-reverse lg:flex-row p-5 lg:p-0 h-auto lg:h-screen justify-evenly lg:justify-around items-center">
    <HeroSection/>
<div data-aos="zoom-in" data-aos-once="true" className='h-auto lg:h-full w-3/5 lg:w-2/4 xl:w-2/5 flex clip-custom justify-center bg-gradient-to-r from-emerald-400 to-cyan-400 pt-5'>
    <Image 
          src={placeholder}
          alt="Picture of the author"
          objectFit="contain"
          objectPosition="bottom"
        
        className="!relative h-full w-auto pt-5"/> </div>
    </div>
        );
  }
