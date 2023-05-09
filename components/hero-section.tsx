'use client';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React,{useEffect} from "react";

import { useReducer } from 'react';
import GraphemeSplitter from 'grapheme-splitter';
import { Pause, Play } from 'lucide-react';
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

  return (
    <div
      className={cn(
        'flex flex-col-reverse items-start h-full w-3/5 justify-center px-28 relative',
      )}
    >
<p data-aos="fade-up"  data-aos-once="true"
 className="jakarta-font text-darkish dark:text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Typist
        typingDelay={0}
        splitter={splitter}
        pause={isPaused}
        onTypingDone={() => dispatch({ type: 'setDone', payload: 'title' })}
      >
         <h1 data-aos="fade-right"
         data-aos-offset="200"
     data-aos-anchor-placement="bottom-center"
     data-aos-once="true"
className='hero-font font-black uppercase bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
          A. B. CDEF
          </h1>
      </Typist>
      <h2 className="font-inter text-center flex justify-start min-h-[10vh] min-w-[30vw] text-5xl font-black uppercase bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
        {titleDone && (
          <Typist
            typingDelay={3500}
            startDelay={100}
            pause={isPaused}
            onTypingDone={() => {
              dispatch({ type: 'setDone', payload: 'subtitle' });
            }}
          >
            {' '}
          </Typist>
        )}
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
