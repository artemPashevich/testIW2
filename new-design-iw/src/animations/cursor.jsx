import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [showCursor, setShowCursor] = useState(window.innerWidth > 1200); 

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleResize = () => {
    if (window.innerWidth <= 1200) {
      setShowCursor(false); 
    } else {
      setShowCursor(true);   
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      transition: {
        type: "spring",  // Use spring for faster reaction
        stiffness: 1000, // High stiffness makes it snappier
        damping: 20,     // Lower damping to reduce delay
      },
    }
  };

  return (
    <>
      {showCursor && (
        <motion.div
          className="custom-cursor"
          variants={variants}
          animate={cursorVariant}
        />
      )}
    </>
  );
};

export default Cursor;