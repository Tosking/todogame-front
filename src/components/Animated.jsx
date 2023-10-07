import {motion} from 'framer-motion';
import React from "react";
const animations = {
  initial:{opacity:0,x:-100},
  animate:{opacity:1,x:0},
  exit:{opacity:0,x:100}
}


 const AnimatedPage = ({children,className}) => {

  return (
    <motion.div 
    className={className}
    variants={animations}
    initial = "initial"
    animate="animate"
    exit = "exit"
    transition={{duration:0.5}}
    >
    {children}
    </motion.div>
  )

}
export default AnimatedPage;