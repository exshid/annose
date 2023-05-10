import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type PhotoCardProps = {
    photo: string;
  };
  
  export function PhotoCard() {
    
    return (
        <div className="flex flex-col-reverse lg:flex-row h-screen justify-evenly lg:justify-around items-center">
    <HeroSection/>
<div data-aos="zoom-in" data-aos-once="true" className='h-auto lg:h-full w-3/5 lg:w-2/5 flex clip-custom justify-center bg-gradient-to-r from-emerald-400 to-cyan-400 pt-5'>
    <Image 
          src={placeholder}
          alt="Picture of the author"
        className="!relative h-full object-cover w-11/12 pt-5"/> </div>
    </div>
        );
  }
