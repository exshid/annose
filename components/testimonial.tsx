//@ts-nocheck 
'use client'
import React, { useState, useEffect } from 'react';
import {ScrollWrapper} from '@/components/wrapper';
import { blogConfig } from '@/config';

export const Testimonials = () => {

  const [transitionClassText, setTransitionClassText] = useState("transition opacity-100");
    

  const [count, setCount] = useState(0);
  function classNames() {
    setCount((count + 1) % blogConfig.testimonials.length);
    setTransitionClassText("transition opacity-0");

    setTimeout(() => {
      setTransitionClassText("transition opacity-100");

    }, 500);

  }

  function handleClickPlus() {
    setCount((count + 1) % blogConfig.testimonials.length);
    classNames()
  }

  function handleClickMinus() {
    setCount((count - 1 + blogConfig.testimonials.length) % blogConfig.testimonials.length);
    classNames()
    
  }



  return (
    <ScrollWrapper>
              <div id="books" className="flex justify-evenly bg-white dark:bg-moredarkish py-5 flex-col h-[50vh] w-full items-center">
              <h3 className="heading-font pt-5 text-2xl md:text-3xl lg:text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
        Testimonials</h3>

      <div className="z-30 relative flex items-center justify-center w-full h-full">
          
          <div className="inset-0 z-30 h-full flex flex-col w-4/5 lg:w-full items-center justify-center">
              <div className={`z-[55] flex-row rounded-lg items-center justify-center
              flex w-full lg:w-[840px] bg-cover bg-centertransition ${transitionClassText}`}>

<div className="flex h-full flex-col justify-evenly relative w-full p-5 text-white">
  <div className="text-darkish dark:text-white"><p className={`heading-font font-black text-3xl lg:text-5xl transition ${transitionClassText}`}>{blogConfig.testimonials[count].text}</p>
<p className={`jakarta-font transition text-xl lg:text-2xl ${transitionClassText}`}>— {blogConfig.testimonials[count].writerName}</p></div>
</div>
              </div>
          </div>

{blogConfig.testimonials.length > 1 &&
<div className="z-50 absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
      <a onClick={handleClickPlus} className="btn bg-white dark:bg-darkish btn-circle opacity-90 hover:opacity-100">❮</a> 
      <a onClick={handleClickMinus} className="btn bg-white dark:bg-darkish btn-circle opacity-90 hover:opacity-100">❯</a>
    </div>
}
</div>
</div>
      </ScrollWrapper>
  );
};
