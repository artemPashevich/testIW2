import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const AnimatedText = () => {
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simulating preloader
    const timer = setTimeout(() => {
      setIsPreloaderDone(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll event listener
    const handleScroll = () => {
      // Update the scroll position, limiting it to 20px at most
      setScrollY(Math.min(window.scrollY, 30));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.h1
      className="hello-container-h1"
      initial={{
        opacity: 0,
        transform: 'translate3d(0px, 100%, 0vw) scale3d(1, 1, 1) rotateX(90deg)',
        transformStyle: 'preserve-3d',
      }}
      animate={isPreloaderDone
        ? {
            opacity: 1,
            transform: `translateY(-${scrollY}px)`, // Move up as you scroll
            transition: {
              duration: 1.2,
              ease: 'easeInOut',
            },
          }
        : {}}
    >
      Empowering digital solutions
    </motion.h1>
  );
};