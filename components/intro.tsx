import Image from 'next/image'
import paragraph from '../public/images/paragraph.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    
    return (
        <div className="flex justify-center h-screen w-full">
        <div className="w-8/12 flex">
  <svg className="w-1/2" fill="#25D3DD" width="300px" height="300px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2h-8a1 1 0 100 2h8zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2h-8a1 1 0 100 2h8z"/>
 </svg>
     
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
