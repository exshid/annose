import Image from 'next/image'
import {BookCard} from '@/components/bookcard';
import placeholder from '../public/images/placeholder.svg'
type BooksProps = {
    photo: string;
  };
  
  export function Books() {
    
    return (
        <div className="flex bg-white dark:bg-darkish px-6 h-screen w-full justify-around items-center">
    <BookCard/>
    <BookCard/>
    <BookCard/>
    </div>
        );
  }
