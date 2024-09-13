import React, { useRef } from 'react';

const TiltCard = ({ children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const rotateX = -(e.clientY - cardCenterY) / 15;
    const rotateY = (e.clientX - cardCenterX) / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`; // Reset the position on mouse leave
  };

  return (
    <div
      className="tilt-card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.1s ease-out',
        transformStyle: 'preserve-3d',
        perspective: '4000px',
      }}
    >
      {children}
    </div>
  );
};

export default TiltCard;