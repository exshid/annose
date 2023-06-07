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
transition={{delay:0}}
>
    {children}
</motion.div>


}
export default PageWrapper;
