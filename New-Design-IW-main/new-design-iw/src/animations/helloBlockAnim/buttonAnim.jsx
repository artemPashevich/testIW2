import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Cover component that wraps and animates the MainButton
export const Cover = ({ children }) => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Start the animation after a 3-second delay (adjust the time as necessary)
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 4000); // Delay in milliseconds

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: 'translateY(100px)', // Starts from underground
      }}
      animate={startAnimation ? {
        opacity: 1,
        transform: 'translateY(0px)', // Moves up to its final position
        transition: {
          duration: 1.5, // Slow upward movement
          ease: 'easeOut', // Ease out to slow the animation as it reaches the end
        },
      } : {}}
    >
      {children} {/* Render the children, e.g., MainButton */}
    </motion.div>
  );
};