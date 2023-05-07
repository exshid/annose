'use client';

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

  return (
    <div
      className={cn(
        'flex flex-col-reverse items-start items-center h-full w-1/2 justify-center space-y-2',
        'relative px-4',
      )}
    >
      <Typist
        typingDelay={0}
        splitter={splitter}
        pause={isPaused}
        onTypingDone={() => dispatch({ type: 'setDone', payload: 'title' })}
      >
         <h1 className='text-9xl mb-5 font-black uppercase bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent'>
          Name Here
          </h1>
      </Typist>
      <h2 className="text-center min-h-[10vh] min-w-[30vw] text-5xl font-black uppercase bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700 bg-clip-text text-transparent">
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
