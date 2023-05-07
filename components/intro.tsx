import Image from 'next/image'
import paragraph from '../public/images/paragraph.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    
    return (
        <div className="h-screen">
 <div>
 <svg fill="linear-gradient(to right, #F00, #00F)" width="400px" height="400px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><path d="M3,7h18c0.6,0,1-0.4,1-1s-0.4-1-1-1H3C2.4,5,2,5.4,2,6S2.4,7,3,7z M3,11h14c0.6,0,1-0.4,1-1s-0.4-1-1-1H3c-0.6,0-1,0.4-1,1S2.4,11,3,11z M21,13H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h18c0.6,0,1-0.4,1-1S21.6,13,21,13z M17,17H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S17.6,17,17,17z"/></svg>
     
 </div>
 </div>
);
  }
