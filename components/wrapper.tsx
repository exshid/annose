'use client'

import { blogConfig } from '@/config';
import { motion, AnimatePresence } from "framer-motion"
import React, { ReactNode,useState  } from 'react';
type Props = {
  children: ReactNode;
  className?: any;
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
transition={{delay:0, duration: 0.5}}
>
    {children}
</motion.div>


}

export const BookWrapper: React.FC<Props> = ({ children, className }) => {
  return <motion.div
className={className}

    initial={{ opacity: 0, y:100 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{ once: true }}
  transition={{delay:0, duration: 0.6}}
  >
      {children}
  </motion.div>
  
  
  }
  

export default PageWrapper;
