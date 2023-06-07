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
              <div id="books" className="flex justify-evenly bg-white dark:bg-moredarkish h-auto lg:h-[50vh] w-full items-center">

      <div className="z-30 relative items-center justify-center w-full h-full">
          
          <div className="inset-0 z-30 flex flex-col items-center justify-center">
              <div className={`z-[55] flex-row rounded-lg items-center justify-center
              flex w-full h-4/5 lg:w-[840px] bg-cover bg-centertransition ${transitionClassText}`}>

<div className="flex h-full flex-col justify-evenly relative w-full p-5 text-white">
  <div><p className={`heading-font font-black text-3xl lg:text-5xl transition ${transitionClassText}`}>{blogConfig.testimonials[count].text}</p>
<p className={`jakarta-font transition text-xl ${transitionClassText}`}>— {blogConfig.testimonials[count].writerName}</p></div>
</div>
              </div>
          </div>

{blogConfig.testimonials.length > 1 &&
<div className="z-50 absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
      <a onClick={handleClickPlus} className="btn btn-circle opacity-90 hover:opacity-100">❮</a> 
      <a onClick={handleClickMinus} className="btn btn-circle opacity-90 hover:opacity-100">❯</a>
    </div>
}
</div>
</div>

        )</ScrollWrapper>
  );
};
