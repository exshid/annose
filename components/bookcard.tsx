import Image from 'next/image'
import cover from '../public/images/cover.jpg'
type BookCardProps = {
    photo: string;
  };
  
  export function BookCard() {
    
    return (
        <div className="flex bg-white custom-boxshadow dark:shadow-none dark:bg-lightdarkish rounded-lg h-[550px] w-[350px] justify-around items-center">
 <Image 
          src={cover}
          alt="Cover of the book"
          height={550}
          width={350}
        className="!relative h-full object-cover rounded-lg w-full p-5"/>
    <div className="bg-white dark:bg-lightdarkish h-1/4	w-full">Book Name</div>
    </div>

        );
  }
