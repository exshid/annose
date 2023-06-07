'use client'
import { blogConfig } from '@/config';
import { motion, AnimatePresence } from "framer-motion"
import React, { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};

  
const PageWrapper: React.FC<Props> = ({ children }) => {

 return (
    <AnimatePresence>
<motion.div
  initial={{ opacity: 0, y:150 }}
  animate={{ opacity: 1, y:0 }}
  exit={{ opacity: 0, y:150 }}
transition={{delay:0.5}}
>
    {children}
</motion.div>
</AnimatePresence>
 )

}

export const ScrollWrapper: React.FC<Props> = ({ children }) => {
return <motion.div
  initial={{ opacity: 0, y:100 }}
  whileInView={{ opacity: 1, y:0 }}
  viewport={{ once: true }}
transition={{delay:0, duration: 0.6}}
>
    {children}
</motion.div>


}

export const BookWrapper: React.FC<Props> = ({ children }) => {
  return <motion.div
className="z-[55] flex-col lg:bg-gradient-to-r from-emerald-400 to-cyan-400
lg:flex-row rounded-lg lg:overflow-hidden items-center justify-center
flex w-11/12 h-4/5 lg:w-[840px] lg:h-[555px] bg-cover bg-centertransition transition opacity-100"

    initial={{ opacity: 0, y:100 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{ once: true }}
  transition={{delay:0, duration: 0.6}}
  >
      {children}
  </motion.div>
  
  
  }
  

export default PageWrapper;
