import Image from 'next/image'
import {BookCard} from '@/components/bookcard';

type BooksProps = {
    photo: string;
  };
  
  export function Books() {
    
    return (

        <div id="books" className="flex justify-evenly bg-white dark:bg-moredarkish h-screen w-full items-center">
    <BookCard/>
    </div>
        );
  }
