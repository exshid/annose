'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  AtSign,
  Copyright,
  Facebook,
  Twitter,
} from 'lucide-react';

import { Tooltip } from '@/components/tooltip';
import React,{useEffect} from "react";

import { useReducer } from 'react';
import GraphemeSplitter from 'grapheme-splitter';
import Typist from 'react-typist-component';
import Balancer from 'react-wrap-balancer';

import { blogConfig } from '@/config';
import { cn } from '@/lib/utils';

type TypingState = {
  titleDone: boolean;
  subtitleDone: boolean;
  isPaused: boolean;
};

type TypingAction =
  | { type: 'togglePause' }
  | { type: 'setDone'; payload: 'title' | 'subtitle' };

const reducer = (state: TypingState, action: TypingAction) => {
  switch (action.type) {
    case 'togglePause':
      return {
        ...state,
        isPaused: !state.isPaused,
      };
    case 'setDone':
      return {
        ...state,
        [`${action.payload}Done`]: true,
      };
  }
};

const splitter = (str: string) => new GraphemeSplitter().splitGraphemes(str);

export function HeroSection() {
  const [{ titleDone, subtitleDone, isPaused }, dispatch] = useReducer(
    reducer,
    {
      titleDone: false,
      subtitleDone: false,
      isPaused: false,
    },
  );
  useEffect(() => {
    AOS.init();
  }, [])

  const { footerLinks } = blogConfig;
  return (
    <div
      className={cn(
        'flex flex-col-reverse items-center ml-2 lg:ml-0 lg:items-start h-auto lg:h-full w-full lg:w-2/4 xl:w-3/5 justify-center px-2 xl:px-28 relative',
      )}
    >
      <div className="flex flex-row flex-wrap justify-center gap-4 max-xs:px-16 mb-5 lg:mb-0">
        {footerLinks?.facebook && (
          <a
            href={footerLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook
              id="facebook"
              className="icon-base"
              data-tooltip-content="My facebook profile"
              aria-label="My facebook profile"
            />
            <Tooltip anchorId="facebook" />
          </a>
        )}
        {footerLinks?.twitter && (
          <a
            href={footerLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            
            <Twitter
              id="twitter"
              className="icon-base"
              data-tooltip-content="My Twitter profile"
              aria-label="My Twitter profile"
            />
            <Tooltip anchorId="twitter" />
          </a>
        )}
        
        {footerLinks?.email && (
          <a href={`mailto:${footerLinks.email}`}>
            <AtSign
              id="email"
              className="icon-base"
              data-tooltip-content="My Email"
              aria-label="My Email"
            />
            <Tooltip anchorId="email" />
          </a>
        )}
        
      </div>


<p data-aos="fade-left" data-aos-once="true" className="jakarta-font mb-5 lg:mb-10 text-darkish dark:text-white p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <h1 data-aos="fade-right"
     data-aos-once="true"
className='hero-font font-black uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
          A. B. CDEF
          </h1>
      <h2 className="font-inter text-center flex justify-start min-h-[7vh] lg:min-h-[10vh] min-w-[30vw] text-2xl lg:text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
        
          <Typist
            typingDelay={1000}
            startDelay={100}
            pause={isPaused}
            onTypingDone={() => {
              dispatch({ type: 'setDone', payload: 'subtitle' });
            }}
          >
            {' '}
          </Typist>
         {subtitleDone && (
          <Typist typingDelay={100} backspaceDelay={75} pause={isPaused} loop>
            {blogConfig.topics.map((topic) => (
              <span key={topic}>
                {topic}
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={topic.length} />
              </span>
            ))}
          </Typist>
        )}
      </h2>
    </div>
  );
}
