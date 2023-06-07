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
  initial={{ opacity: 0, y:15 }}
  animate={{ opacity: 1, y:0 }}
  exit={{ opacity: 0, y:15 }}
transition={{delay:0.5}}
>
    {children}
</motion.div>
</AnimatePresence>
 )

}
export default PageWrapper;
