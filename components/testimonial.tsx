//@ts-nocheck 
'use client'
import {  useEffect } from 'react';
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
              <div id="books" className="flex justify-evenly bg-white dark:bg-moredarkish h-auto lg:min-h-[50vh] w-full items-center">

      <div className="z-30 relative items-center justify-center w-full h-auto min-h-full lg:overflow-auto">
          <div className="transition ease-in-out inset-0 h-screen bg-cover transition ease-in-out opacity-100 bg-center bg-fixed">
          </div>
          
          <div className="absolute inset-0 z-20 flex items-center justify-center h-auto w-full bg-gray-900 bg-opacity-75"></div>
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center backdrop-blur-md">
              <div className={`z-[55] flex-col lg:bg-gradient-to-r from-emerald-400 to-cyan-400
              lg:flex-row rounded-lg lg:overflow-hidden items-center justify-center
              flex w-11/12 h-4/5 lg:w-[840px] lg:h-[555px] bg-cover bg-centertransition ${transitionClassText}`}>

<div className="flex h-min lg:h-full bottom-[17px] lg:bottom-[unset] flex-col justify-evenly w-auto rounded-lg lg:rounded-none absolute lg:relative lg:w-3/5 p-5 text-white bg-gradient-to-r lg:bg-none from-emerald-400 to-cyan-400">
  <div><p className={`font-inter font-black text-3xl lg:text-5xl transition ${transitionClassText}`}>{blogConfig.testimonials[count].text}</p>
<p className={`jakarta-font transition ${transitionClassText}`}>—By {blogConfig.testimonials[count].writerName}</p></div>
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
