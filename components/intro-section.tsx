import Image from 'next/image'
import placeholder from '../public/images/placeholder.svg'
import { HeroSection } from '@/components/hero-section';
type IntroSectionProps = {
    photo: string;
  };
  
  export function IntroSection() {
    
    return (
        <div className="flex h-screen w-full bg-white dark:bg-lightdarkish justify-around items-center">
               <h3 className="jakarta-font text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">More about A. B. Cdef</h3>
          <p className="jakarta-font text-darkish dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, perferendis ut iure blanditiis magnam officia minima reprehenderit, illo commodi nobis soluta et delectus temporibus autem culpa, neque porro harum. Suscipit! Lorem ipsum dolor sit amet.
            Quis quod corrupti sequi dicta quidem ipsam facilis ab expedita, fuga quibusdam, eius fugiat nihil. Numquam porro sunt eos earum corporis dignissimos!
Natus numquam quia enim at voluptatum temporibus iste nisi quaerat, quam, ipsum possimus necessitatibus fugit rem, nostrum vero. Laborum perspiciatis rerum dignissimos.
          </p>
    </div>
        );
  }
