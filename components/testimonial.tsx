//@ts-nocheck 
'use client'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import {ScrollWrapper} from '@/components/wrapper';
import { blogConfig } from '@/config';

register();

export const Testimonials = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);
  return (
    <ScrollWrapper>
<div className="h-auto w-full">
   
<swiper-container
      ref={swiperElRef}
      slides-per-view="3"
      navigation="true"
      pagination="true"
    >
      <swiper-slide>Slide 1</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      ...
    </swiper-container>
  </div>
</ScrollWrapper>
  );
};
