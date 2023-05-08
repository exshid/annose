import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroProps = {
    photo: string;
  };
  
  export function Intro() {
    
    return (
      <div className="max-w-screen-lg p-10 bg-darkerlight dark:bg-lightdarkish">
<div className="flex flex-col w-1/3 justify-center max-w-xs s-boxshadow dark:shadow-none bg-white dark:bg-lightdarkish p-6 shadow-md rounded-xl sm:px-12 dark:text-gray-100">
<Image
  src={placeholder}
  alt="picture of the author"
  width={450}
  height={450}
  className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
/>
</div>
<div className="flex flex-col w-2/3 justify-center max-w-xs s-boxshadow dark:shadow-none bg-white dark:bg-lightdarkish p-6 shadow-md rounded-xl sm:px-12 dark:text-gray-100">
<p className="jakarta-font text-darkish dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, ad asperiores ipsam voluptatem rem a id maxime odio ullam accusantium dolor magnam quam expedita! A tenetur ipsam enim magnam cupiditate.</p>
</div>

</div>
      );
  }
