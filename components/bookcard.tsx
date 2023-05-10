import Image from 'next/image'
import cover from '../public/images/cover.jpg'
type BookCardProps = {
    photo: string;
  };
  
  export function BookCard() {
    
    return (
      <div className="z-30 relative items-center justify-center w-full h-full md:overflow-auto">
          <div className="inset-0 h-screen bg-cover bg-center bg-fixed" 
              style={{
                backgroundImage: `url(${cover.src})`
            }}>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center h-auto md:h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div className="absolute inset-0 z-30  flex flex-col items-center justify-center backdrop-blur">
              <div className="shadow-2xl flex-col md:flex-row rounded-lg md:overflow-hidden items-center justify-center	flex w-full h-full md:w-[840px] md:h-[555px] bg-cover bg-center">
      <Image src={cover} alt="cover of the book" className="w-3/4 h-3/4 md:w-[555px] md:h-full"/>
<div className="h-min flex-col justify-evenly w-full absolute md:relative md:w-max p-5 flex text-white bg-gradient-to-r from-emerald-400 to-cyan-400"><h3 className="font-inter font-black text-5xl">Book Title</h3>
<p className="jakarta-font m-0 md:mb-[40px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil fugit distinctio ut nemo corrupti. Aperiam, distinctio a obcaecati dolore ipsum, harum minus facere deleniti ullam cumque officiis ea minima!</p>
<div className="hidden md:block">
    <button className="transition hover:-translate-y-[4px] uppercase block w-full p-4 text-lg bg-white rounded-full focus:outline-none"><p className="uppercase font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Read More</p></button>

                </div>
</div>
              </div>
          </div>

</div>
        );
  }