import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    
    return (
        <div className="bg-darkerlight dark:bg-lightdarkish text-darkish dark:text-white flex justify-center h-screen w-full">
        <div className="w-8/12 flex">
        <div className="w-1/2 justify-center items-center">
        <Image 
          src={placeholder}
          alt="Picture of the author"
          height={400}
        className="object-cover"/>
</div>     
 <div className="flex flex-col w-1/2 justify-center items-center">
    <h3 className="font-inter text-5xl font-black uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
        About A. B. CDEF</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos molestias tempora dolore sit quis sed, praesentium vitae eos iste odit modi. Aliquid distinctio nesciunt illo enim natus laboriosam ea. Reprehenderit.
        Ut totam harum minus, iusto corrupti sequi tenetur voluptas nobis maiores provident exercitationem eum nisi consectetur autem reprehenderit. Fugiat aliquid itaque odio!
        </p>
 </div>
 </div>
 </div>
);
  }
