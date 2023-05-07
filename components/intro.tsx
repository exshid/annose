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
  <svg className="w-1/2" fill="#25D3DD" width="500px" height="500px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M3,7h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,5,2,5.4,2,6S2.4,7,3,7z M3,11h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H3c-0.6,0-1,0.4-1,1S2.4,11,3,11z M21,13H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,13,21,13z M17,17H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S17.6,17,17,17z"/>
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
