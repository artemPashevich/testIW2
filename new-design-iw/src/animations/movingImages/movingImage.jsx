
import React, { useEffect } from 'react';
import './movingImage.css';

function MovingImages({ width, height, count, speed, img }) {
  useEffect(() => {
    createMovingImages(width, height, count, speed, img);
  }, [width, height, count, speed, img]);

  return <div className="moving-images-background"></div>;
}

const createMovingImages = (width, height, count, speed, img) => {
  const container = document.querySelector('.moving-images-background');

  for (let i = 0; i < count; i++) {
    const image = document.createElement('img');
    image.src = img;
    image.classList.add('moving-image');
    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.left = `${Math.random() * 100}vw`;
    image.style.top = `${Math.random() * 100}vh`;
    image.style.animationDuration = `${speed}s`;
    image.style.setProperty('--animation-duration', `${speed}s`);
    image.style.animationDelay = `0s`

    const directionX = Math.random() < 0.5 ? -1 : 1;
    const directionY = Math.random() < 0.5 ? -1 : 1;
    const distanceX = Math.random() * 100 + 50;
    const distanceY = Math.random() * 100 + 50;

    image.style.setProperty('--distance-x', `${directionX * distanceX}vw`);
    image.style.setProperty('--distance-y', `${directionY * distanceY}vh`);

    container.appendChild(image);
  }
};

export default MovingImages;