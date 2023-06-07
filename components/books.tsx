import {BookCard} from '@/components/bookcard';

  
  export function Books() {
    
    return (

        <div id="books" className="flex justify-evenly bg-white dark:bg-moredarkish h-screen w-full items-center">
    <BookCard/>
    </div>
        );
  }
