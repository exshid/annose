//@ts-nocheck 
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

   
    <swiper-container ref={swiperElRef}
      slides-per-view="3"
      direction="vertical" pagination="true" pagination-clickable="true">
      {blogConfig.map((slide, index) => (
        <swiper-slide key={Math.random()}><p>{slide.text}</p><p>{slide.writerName}</p></swiper-slide>
        ))}
  </swiper-container>

</ScrollWrapper>
  );
};
