import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ShakeHover = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)} 
      onAnimationComplete={() => setIsHovered(false)} 
      animate={isHovered ? {
        rotate: [0, -3, 3, -3, 3, 0], 
        transition: {
          duration: 0.5, 
          ease: 'easeInOut',
        }
      } : {}}
      style={{
        display: 'inline-block', 
      }}
    >
      {children}
    </motion.div>
  );
};

export default ShakeHover;