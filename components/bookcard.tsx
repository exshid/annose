//@ts-nocheck 
'use client'
import { useRef, useEffect,useState } from 'react';
import { register } from 'swiper/element/bundle';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from 'next/image'
import cover from '../public/images/cover.jpg'
import coverII from '../public/images/cover-ii.jpg'
register();

type BookCardProps = {
    photo: string;
  };
  export const BookCard: React.FC = () => {

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
  
    const covers = [cover, coverII];
    const [transitionClass, setTransitionClass] = useState("transition ease-in-out inset-0 h-screen bg-cover transition ease-in-out opacity-100 bg-center bg-fixed");
    const [transitionClassImg, setTransitionClassImg] = useState("w-auto h-full lg:h-auto rounded-lg opacity-100 lg:rounded-none transition ease-in-out object-cover contain lg:h-full");

    const [count, setCount] = useState(0);
    function classNames() {
      setCount((count + 1) % covers.length);
      setTransitionClass("transition ease-in-out inset-0 h-screen bg-cover transition ease-in-out opacity-0 bg-center bg-fixed");
      setTransitionClassImg("w-auto h-full lg:h-auto rounded-lg lg:rounded-none transition opacity-0 ease-in-out object-cover contain lg:h-full");

      setTimeout(() => {

        setTransitionClass("transition ease-in-out inset-0 h-screen bg-cover transition ease-in-out opacity-100 bg-center bg-fixed");
      }, 500);
      setTimeout(() => {
        setTransitionClassImg("w-auto h-full lg:h-auto rounded-lg lg:rounded-none transition opacity-100 ease-in-out object-cover contain lg:h-full");

      }, 200);
  
    }

    function handleClickPlus() {
      setCount((count + 1) % covers.length);
      classNames()
    }

    function handleClickMinus() {
      setCount((count - 1 + covers.length) % covers.length);
      classNames()
    }

    return (
<>
<div className="z-30 relative items-center justify-center w-full h-auto min-h-full lg:overflow-auto">
          <div className={transitionClass} 
              style={{
                backgroundImage: `url(${covers[count].src})`
            }}>
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center h-auto lg:h-screen w-full bg-gray-900 bg-opacity-75"></div>
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center backdrop-blur">
              <div data-aos="fade-right" data-aos-once="true" className="z-[55] flex-col lg:flex-row rounded-lg lg:overflow-hidden items-center justify-center	flex w-11/12 h-4/5 lg:w-[840px] lg:h-[555px] bg-cover bg-center">
      <div className="w-full flex justify-center lg:w-2/5 h-full overflow-hidden">
      <Image src={covers[count]} alt="cover of the book" className={transitionClassImg}/></div>
<div className="flex h-min lg:h-full bottom-[17px] lg:bottom-[unset] flex-col justify-evenly w-auto min-w-[80%] lg:min-w-[unset] rounded-lg lg:rounded-none absolute lg:relative lg:w-3/5 p-5 text-white bg-gradient-to-r from-emerald-400 to-cyan-400"><div><h3 className="font-inter font-black text-3xl lg:text-5xl">Book Title</h3><p className="jakarta-font">By Author Name</p></div>
<p className="hidden lg:block jakarta-font !m-0 !lg:mb-[40px]">Lorem, ipsum dolor si amet consectetur adipisicing elit. Dignissimos nihil fugit distinctio ut nemo corrupti. Aperiam, distinctio a obcaecati dolore ipsum, harum minus facere deleniti ullam cumque officiis ea minima!</p>
</div>
              </div>
          </div>
          <div className="z-50 absolute flex justify-between transform -translate-y-1/2 inset-x-5 top-1/2">
      <a onClick={handleClickPlus} className="btn btn-circle opacity-90 hover:opacity-100">❮</a> 
      <a onClick={handleClickMinus} className="btn btn-circle opacity-90 hover:opacity-100">❯</a>
    </div>

</div>
     <swiper-container ref={swiperElRef}
 class="mySwiper" pagination="true" pagination-clickable="true" slides-per-view="auto"
    centered-slides="true" space-between="30">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper-container>


</> 
   );
  }