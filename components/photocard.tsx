import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type PhotoCardProps = {
    photo: string;
  };
  
  export function PhotoCard() {
    
    return (
        <div className="flex h-[96vh] justify-around items-center">
    <HeroSection/>
<div className='bg-white rounded-lg	dark:bg-lightdarkish p-5'>
    <Image 
          src={placeholder}
          alt="Picture of the author"
          width={500}
          height={500}
    
    />
</div>
    </div>
        );
  }
