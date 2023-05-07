import Image from 'next/image'
import {BookCard} from '@/components/bookcard';
import placeholder from '../public/images/placeholder.svg'
type BooksProps = {
    photo: string;
  };
  
  export function Books() {
    
    return (
        <div className="flex justify-evenly bg-white dark:bg-moredarkish px-6 h-screen w-full items-center">
    <BookCard/>
    <BookCard/>
    <BookCard/>
    </div>
        );
  }
