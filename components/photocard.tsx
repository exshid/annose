import Image from 'next/image'
import placeholder from '../public/images/placeholder.jpg'
import {NameCard} from './name';
type PhotoCardProps = {
    photo: string;
  };
  
  export function PhotoCard() {
    
    return (
        <div className="flex">
<div className='bg-white dark:bg-darkish p-5'>
    <Image 
          src={placeholder}
          alt="Picture of the author"
          width={500}
          height={500}
    
    />
</div>
    <NameCard name="Rose"/>
    </div>
        );
  }
