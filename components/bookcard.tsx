import Image from 'next/image'
import cover from '../public/images/cover.jpg'
type BookCardProps = {
    photo: string;
  };
  
  export function BookCard() {
    
    return (
      <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
          <div className="inset-0 h-screen bg-cover bg-center bg-fixed" 
              style={{
                backgroundImage: `url(${cover.src})`
            }}>
          </div>
          
<div className="grid grid-cols-2 w-full w-3/5 grid-rows-1 gap-0">
    <div className="bg-white">1</div>
    <div className="bg-darkish">2</div>
</div>
    
      </div>
        );
  }
