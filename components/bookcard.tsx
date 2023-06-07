'use client'
import React, { useState } from 'react';
import Image from 'next/image'
import { blogConfig } from '@/config';

type BookCardProps = {
    photo: string;
  };
  
  export function BookCard() {
    console.log(blogConfig.books);
    const [transitionClassText, setTransitionClassText] = useState("transition opacity-100");
    

    const [count, setCount] = useState(0);
    function classNames() {
      setCount((count + 1) % blogConfig.books.length);
      setTransitionClassText("transition opacity-0");

      setTimeout(() => {
        setTransitionClassText("transition opacity-100");

      }, 500);
  
    }

    function handleClickPlus() {
      setCount((count + 1) % blogConfig.books.length);
      classNames()
    }

    function handleClickMinus() {
      setCount((count - 1 + blogConfig.books.length) % blogConfig.books.length);
      classNames()
      console.log(blogConfig.books[count].cover);
      
    }

    return (
      <div className="z-30 relative items-center justify-center w-full h-auto min-h-full lg:overflow-auto">
          <div className="transition ease-in-out inset-0 h-screen bg-cover transition ease-in-out opacity-100 bg-center bg-fixed" 
              style={{
                backgroundImage: `url(${blogConfig.books[count].cover})` 
            }}>
          </div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center h-auto lg:h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center backdrop-blur-md">
              <div className={`z-[55] flex-col lg:bg-gradient-to-r from-emerald-400 to-cyan-400
              lg:flex-row rounded-lg lg:overflow-hidden items-center justify-center
              flex w-11/12 h-4/5 lg:w-[840px] lg:h-[555px] bg-cover bg-centertransition ${transitionClassText}`}>
      <div className="w-full flex justify-center lg:w-2/5 h-full overflow-hidden">
      <Image src={blogConfig.books[count].cover} alt="cover of the book" className="w-auto h-full rounded-lg lg:rounded-none transition opacity-100 ease-in-out object-cover contain lg:h-full"/></div>
<div className="flex h-min lg:h-full bottom-[17px] lg:bottom-[unset] flex-col justify-evenly w-auto rounded-lg lg:rounded-none absolute lg:relative lg:w-3/5 p-5 text-white bg-gradient-to-r lg:bg-none from-emerald-400 to-cyan-400"><div><h3 className={`font-inter font-black text-3xl lg:text-5xl transition ${transitionClassText}`}>{blogConfig.books[count].title}</h3>
<p className={`jakarta-font transition ${transitionClassText}`}>By {blogConfig.books[count].author}</p></div>
<p className={`hidden lg:block jakarta-font !m-0 !lg:mb-[40px] transition ${transitionClassText}`} >
  {blogConfig.books[count].description}</p>
</div>
              </div>
          </div>

{blogConfig.books.length > 1 &&
<div className="z-50 absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
      <a onClick={handleClickPlus} className="btn btn-circle opacity-90 hover:opacity-100">❮</a> 
      <a onClick={handleClickMinus} className="btn btn-circle opacity-90 hover:opacity-100">❯</a>
    </div>
}
</div>
        );
  }