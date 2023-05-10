'use client';

import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";
import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    useEffect(() => {
      AOS.init();
    }, [])

return (
<>
    
      <div className="flex flex-col h-screen bg-darkerlight dark:bg-lightdarkish justify-center items-center">
          <h3 data-aos-once="true" data-aos="fade-right" className="font-inter text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
        About A. B. CDEF</h3>

      <div className="w-full flex justify-evenly p-10">
<div data-aos="zoom-out" data-aos-once="true" className="flex flex-col w-2/6 justify-center p-6 sm:px-12 dark:text-gray-100">
<Image
  src={placeholder}
  alt="picture of the author"
  width={450}
  height={450}
  className="rounded-full dark:bg-gray-500 bg-gradient-to-r from-rose-600 to-rose-900 aspect-square"
/>
</div>
<div className="flex flex-col w-2/4 justify-center p-6 sm:px-12 dark:text-gray-100">
<p className="jakarta-font text-darkish dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ad asperiores ipsam voluptatem rem a id maxime odio ullam accusantium dolor magnam quam expedita! A tenetur ipsam enim magnam cupiditate.
Quos iure in voluptas! Libero aspernatur error temporibus id aperiam culp similique pariatur ex, optio sunt. Pariatur velit fugiat consequuntur quaerat eius.</p>
<div className="px-4 pb-2 pt-4">
                        <button data-aos="fade-up" data-aos-once="true"
     data-aos-anchor-placement="bottom-bottom" className="transition hover:-translate-y-[4px] uppercase block transition w-full p-4 text-lg text-white rounded-full bg-gradient-to-r from-rose-600 to-rose-900 focus:outline-none">Read More</button>
                    </div>

</div>
</div>
</div>
</>
      );
  }
