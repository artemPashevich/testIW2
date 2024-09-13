import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const AnimatedSubtitle = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, 3000); 

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.h5
      className="hello-container-h5"
      initial={{
        opacity: 0,
        transform: 'translateY(100px)', 
      }}
      animate={startAnimation ? {
        opacity: 1,
        transform: 'translateY(0px)', 
        transition: {
          duration: 1.5, // Slow upward movement
          ease: 'easeOut',
        },
      } : {}}
    >
      We specialize in creating energetic and user-friendly websites and apps tailored to your exceptional requirements
    </motion.h5>
  );
};