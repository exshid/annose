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
          <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div className="absolute inset-0 z-30  flex flex-col items-center justify-center backdrop-blur">
              <div className="shadow-2xl rounded-lg overflow-hidden	flex w-[840px] h-[555px] bg-cover bg-center">
      <Image src={cover} height={555} alt="cover of the book" width={355}/>
<div className="h-full flex-col justify-evenly w-max p-5 flex text-white dark:text-darkish bg-gradient-to-r from-emerald-400 to-cyan-400"><h3 className="font-inter font-black text-5xl">Book Title</h3><p className="jakarta-font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil fugit distinctio ut nemo corrupti. Aperiam, distinctio a obcaecati dolore ipsum, harum minus facere deleniti ullam cumque officiis ea minima!</p>
<div>
    <button className="uppercase block w-full p-4 text-lg dark:bg-darkish bg-white rounded-full focus:outline-none"><p className="uppercase font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Read More</p></button>
    <button className="uppercase block w-full p-4 text-lg dark:bg-darkish bg-white rounded-full mt-4 focus:outline-none"><p className="uppercase font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">More books</p></button>

                </div>
</div>
              </div>
          </div>

</div>
        );
  }