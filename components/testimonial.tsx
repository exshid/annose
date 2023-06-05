//@ts-nocheck 
'use client'
import { useRef, useEffect,useState } from 'react';
import { register } from 'swiper/element/bundle';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
register();
export function Testimonial() {

const swiperElRef = useRef(null);
useEffect(() => {
//@ts-ignore
  swiperElRef.current.addEventListener('progress', (e) => {
    const [swiper, progress] = e.detail;
    console.log(progress);
  });
//@ts-ignore  
  swiperElRef.current.addEventListener('slidechange', (e) => {
    console.log('slide changed');
  });
}, []);
return (
<div className="w-full h-screen">

<swiper-container ref={swiperElRef}
class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="auto"
   centered-slides="true" space-between="30">
   <swiper-slide className="bg-[wheat] h-screen">Slide 1</swiper-slide>
   <swiper-slide className="bg-[wheat]">Slide 2</swiper-slide>
   <swiper-slide>Slide 3</swiper-slide>
   <swiper-slide>Slide 4</swiper-slide>
   <swiper-slide>Slide 5</swiper-slide>
   <swiper-slide>Slide 6</swiper-slide>
   <swiper-slide>Slide 7</swiper-slide>
   <swiper-slide>Slide 8</swiper-slide>
   <swiper-slide>Slide 9</swiper-slide>
 </swiper-container>
 </div>
)
}