'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import cover from '../public/images/cover.jpg'
import coverII from '../public/images/cover-ii.jpg'

type BookCardProps = {
    photo: string;
  };
  
  export function BookCard() {
    const covers = [cover, coverII];
    const [count, setCount] = useState(0);
    function handleClick() {
      setCount((count + 1) % covers.length);
    }
  
    return (
      <div className="z-30 relative items-center justify-center w-full h-full lg:overflow-auto">
          <div className="inset-0 h-screen bg-cover transition ease-in-out duration-500 bg-center bg-fixed" 
              style={{
                backgroundImage: `url(${covers[count].src})`
            }}>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center h-auto lg:h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div className="absolute inset-0 z-30  flex flex-col items-center justify-center backdrop-blur">
              <div data-aos="fade-right" data-aos-once="true" className="shadow-2xl flex-col lg:flex-row rounded-lg lg:overflow-hidden items-center justify-center	flex w-full h-full lg:w-[840px] lg:h-[555px] bg-cover bg-center">
      <Image src={covers[count]} alt="cover of the book" className="w-auto h-auto rounded-lg lg:rounded-none transition duration-500 ease-in-out object-cover contain lg:w-[555px] lg:h-full"/>
<div className="flex h-min lg:h-full bottom-[17px] lg:bottom-[unset] flex-col justify-evenly w-auto rounded-lg lg:rounded-none absolute lg:relative lg:w-max p-5 text-white bg-gradient-to-r from-emerald-400 to-cyan-400"><h3 className="font-inter font-black text-5xl">Book Title</h3>
<p className="hidden lg:block jakarta-font !m-0 !lg:mb-[40px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nihil fugit distinctio ut nemo corrupti. Aperiam, distinctio a obcaecati dolore ipsum, harum minus facere deleniti ullam cumque officiis ea minima!</p>
<div className="hidden lg:block">
    <button className="transition hover:-translate-y-[4px] uppercase block w-full p-4 text-lg bg-white rounded-full focus:outline-none"><p className="uppercase font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Read More</p></button>
<button onClick={handleClick}>Background </button>
                </div>
</div>
              </div>
          </div>

</div>
        );
  }