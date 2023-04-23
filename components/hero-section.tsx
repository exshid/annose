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
    <section
      className={cn(
        'flex flex-col items-center justify-center space-y-2',
        'relative rounded-md px-4',
      )}
    >
      <Typist
        typingDelay={100}
        splitter={splitter}
        pause={isPaused}
        onTypingDone={() => dispatch({ type: 'setDone', payload: 'title' })}
      >
        <h1 className="block w-full text-center text-3xl font-bold text-slate-800 dark:text-rose-50 xs:text-4xl sm:text-5xl">
          <Balancer>
                    <h1 className='text-9xl	font-black uppercase bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 bg-clip-text text-transparent'>Rose</h1>
          </Balancer>
        </h1>
      </Typist>
      <p className="text-center text-lg text-slate-800 dark:text-rose-50 xs:text-2xl">
        {titleDone && (
          <Typist
            typingDelay={100}
            startDelay={1000}
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
              <span key={topic} className="font-semibold">
                {topic}
                <Typist.Delay ms={1000} />
                <Typist.Backspace count={topic.length} />
              </span>
            ))}
          </Typist>
        )}
      </p>
      <button
        className="absolute right-3 top-1"
        onClick={() => dispatch({ type: 'togglePause' })}
      >
        {isPaused ? (
          <Play
            className={cn(
              'h-4 w-4',
              'text-slate-400/50 hover:text-accent',
              'dark:text-rose-50/20 dark:hover:text-accent-dark',
            )}
            aria-label="Play animation"
          />
        ) : (
          <Pause
            className={cn(
              'h-4 w-4',
              'text-slate-400/50 hover:text-accent',
              'dark:text-rose-50/20 dark:hover:text-accent-dark',
            )}
            aria-label="Pause animation"
          />
        )}
      </button>
    </section>
  );
}
