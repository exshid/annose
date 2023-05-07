import Image from 'next/image'
import paragraph from '../public/images/paragraph.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    
    return (
        <Image 
        src={paragraph}
        alt="Picture of the author"
      className="!relative h-full object-cover w-11/12 pt-5"/>
);
  }
