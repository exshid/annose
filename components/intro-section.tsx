import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroSectionProps = {
    photo: string;
  };
  
  export function IntroSection() {
    
    return (
        <div className="flex h-screen w-full bg-white dark:bg-lightdarkish justify-around items-center">
    </div>
        );
  }
