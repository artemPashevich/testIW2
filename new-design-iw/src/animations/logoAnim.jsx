import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Logo animation component
export const LogoAnimation = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the animation after a 3-second delay (adjust the time as necessary)
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 4500); // Delay in milliseconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="logo"
      initial={{
        opacity: 0,       // Start transparent
        scale: 0.5,       // Start smaller
      }}
      animate={startAnimation ? {
        opacity: 1,       // End fully opaque
        scale: 1,         // End at full size
        transition: {
          duration: 2.5,  // Slow, growing effect
          ease: 'easeOut', // Smooth ending
        },
      } : {}}
    >
      <img className="logo" src="/logo20.png" alt="Logo Innovate Work"></img>
    </motion.div>
  );
};