import Image from 'next/image'
import placeholder from '../public/images/placeholder.jpg'
import NameCard from './name';
type PhotoCardProps = {
    photo: string;
  };
  
  export function PhotoCard({ photo }: PhotoCardProps) {
    
    return (
<div className='bg-white dark:bg-lightdarkish flex'>
    <Image 
          src={placeholder}
          alt="Picture of the author"
          width={500}
          height={500}
    
    />
    <NameCard/>
</div>
        );
  }
