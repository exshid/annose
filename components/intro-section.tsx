import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroSectionProps = {
    photo: string;
  };
  
  export function IntroSection() {
    
    return (
        <div className="flex h-screen w-full bg-white dark:bg-lightdarkish justify-around items-center">
                     <h2 className='hero-font font-black uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
          A. B. CDEF
          </h2>
          <p className="jakarta-font text-darkish dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
    </div>
        );
  }
