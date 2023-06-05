
import cover from '../public/images/cover.jpg'
import coverII from '../public/images/cover-ii.jpg'
import Image from 'next/image'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
const Testimonial: React.FC = () => {
    const covers = [cover, coverII];
  
    const OPTIONS: EmblaOptionsType = {};
    const SLIDE_COUNT = 5;
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  
    return (
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    );
  };