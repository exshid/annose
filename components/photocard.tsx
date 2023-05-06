import Image from 'next/image'
import placeholder from '../public/images/placeholder.jpg'
import { HeroSection } from '@/components/hero-section';
type PhotoCardProps = {
    photo: string;
  };
  
  export function PhotoCard() {
    
    return (
        <div className="flex justify-around	items-center">
<div className='bg-white rounded-lg	dark:bg-lightdarkish p-5'>
    <HeroSection/>
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
