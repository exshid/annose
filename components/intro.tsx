import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    
    return (
      <div className="flex flex-col h-screen bg-darkerlight dark:bg-lightdarkish justify-center items-center">
          <h3 className="font-inter text-5xl pb-10 font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
        About A. B. CDEF</h3>

      <div className="w-full flex justify-around p-10">
<div className="flex flex-col w-1/4 justify-center s-boxshadow dark:shadow-none bg-white dark:bg-lightdarkish p-6 sm:px-12 dark:text-gray-100">
<Image
  src={placeholder}
  alt="picture of the author"
  width={450}
  height={450}
  className="rounded-full dark:bg-gray-500 aspect-square"
/>
</div>
<div className="flex flex-col w-2/4 justify-center s-boxshadow dark:shadow-none bg-white dark:bg-lightdarkish p-6 sm:px-12 dark:text-gray-100">
<p className="jakarta-font text-darkish dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ad asperiores ipsam voluptatem rem a id maxime odio ullam accusantium dolor magnam quam expedita! A tenetur ipsam enim magnam cupiditate.
Quos iure in voluptas! Libero aspernatur error temporibus id aperiam culp similique pariatur ex, optio sunt. Pariatur velit fugiat consequuntur quaerat eius.</p>
</div>
</div>
</div>
      );
  }
