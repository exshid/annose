{/* eslint-disable-next-line tailwindcss/no-custom-classname */}

import Image from 'next/image'
import cover from '../public/images/cover.jpg'
type BookCardProps = {
    photo: string;
  };
  
  export function BookCard() {
    
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
          <div className="inset-0 h-screen bg-cover bg-center bg-fixed" 
              style={{
                backgroundImage: `url(${cover.src})`
            }}>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
          
          <div className="absolute inset-0 z-30  flex flex-col items-center justify-center backdrop-blur">


              <div className="shadow-2xl rounded-lg overflow-hidden	flex w-[900px] h-[555px] bg-cover bg-center">
      <Image alt="" src={cover} height={555} alt="cover of the book" width={355}/>
<div className="h-full flex-col justify-evenly w-max p-5 flex text-white bg-gradient-to-r from-emerald-400 to-cyan-400"><h3 className="font-inter font-black text-5xl">Book Title</h3><p className="jakarta-font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil fugit distinctio ut nemo corrupti. Aperiam, distinctio a obcaecati dolore ipsum, harum minus facere deleniti ullam cumque officiis ea minima!</p>
<div>
    <button className="uppercase block w-full p-4 text-lg bg-white rounded-full focus:outline-none"><p className="uppercase 
    font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Read More</p></button>
    <button className="uppercase block w-full p-4 text-lg bg-white rounded-full mt-4 focus:outline-none"><p className="uppercase font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">More books</p></button>

                </div>
</div>
              </div>
          </div>

</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <Image alt="" src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <div className="z-30 relative items-center justify-center w-full h-full overflow-auto">
          <div className="inset-0 h-screen bg-cover bg-center bg-fixed" 
              style={{
                backgroundImage: `url(${cover.src})`
            }}>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
          
          <div className="absolute inset-0 z-30  flex flex-col items-center justify-center backdrop-blur">


              <div className="shadow-2xl rounded-lg overflow-hidden	flex w-[900px] h-[555px] bg-cover bg-center">
      <Image alt="" src={cover} height={555} alt="cover of the book" width={355}/>
<div className="h-full flex-col justify-evenly w-max p-5 flex text-white bg-gradient-to-r from-emerald-400 to-cyan-400"><h3 className="font-inter font-black text-5xl">Book Title</h3><p className="jakarta-font">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil fugit distinctio ut nemo corrupti. Aperiam, distinctio a obcaecati dolore ipsum, harum minus facere deleniti ullam cumque officiis ea minima!</p>
<div>
    <button className="uppercase block w-full p-4 text-lg bg-white rounded-full focus:outline-none"><p className="uppercase 
    font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Read More</p></button>
    <button className="uppercase block w-full p-4 text-lg bg-white rounded-full mt-4 focus:outline-none"><p className="uppercase font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">More books</p></button>

                </div>
</div>
              </div>
          </div>

</div>
          <div className="absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <Image alt="" src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

        );
  }
