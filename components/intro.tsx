import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    
    return (
        <div className="bg-darkerlight dark:bg-lightdarkish text-darkish dark:text-white flex flex-col items-center justify-center h-auto py-20 w-full">
        <h3 className="font-inter text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
        About A. B. CDEF</h3>
        <div className="w-10/12 flex items-center">

        <div className="w-2/5 justify-center items-center">
        <Image 
          src={placeholder}
          alt="Picture of the author"
          height={400}
        className="object-cover"/>
</div>     
 <div className="flex flex-col w-3/5 justify-center items-center jakarta-font">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestias tempora dolore sit quis sed, praesentium vitae eos iste odit modi. Aliquid distinctio nesciunt illo enim natus laboriosam ea. Reprehenderit.
        Ut totam harum minus, iusto corrupti sequi tenetur voluptas nobis maiores provident exercitationem eum nisi consectetur autem reprehenderit. Fugiat aliquid itaque odio!
        </p>
 </div>
 </div>
 </div>
);
  }
