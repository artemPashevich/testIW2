import React, { useEffect, useState } from 'react';
import './hello.css';
// import MovingImages from '../../../../animations/movingImages/movingImage.jsx';
import MainButton from '../../../buttons/main-button.jsx';
import { AnimatedText } from '/src/animations/helloBlockAnim/mainTextAnim.jsx';
import { AnimatedSubtitle } from '/src/animations/helloBlockAnim/subTitleAnim.jsx';
import { Cover } from '/src/animations/helloBlockAnim/buttonAnim.jsx';
import { scrollToSectionById } from '/src/animations/scrollTo';

function HelloPage() {

    useEffect(() => {
      createEllipses();
      const container = document.querySelector('.animated-background');
      container.style.setProperty('--container-height', `${container.offsetHeight}px`);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <div className="animated-background">
    {/* //     <MovingImages width={50} height={50} count={2} speed={20} img="/IMG_2063.JPG" /> */}
        <div className="container">
        <div className="hello-container">
          <AnimatedText />
          <AnimatedSubtitle/> 
          <Cover> 
            <MainButton onClick={() => scrollToSectionById('formBlock')} title="Start my project" />
          </Cover>
        </div>
        </div>
      </div>
    );
  }
  


  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const ellipses = document.querySelectorAll('.ellipse');

    if (scrollTop > 200) {
        setTimeout(() => {
          ellipses.forEach((ellipse, index) => {
            ellipse.style.setProperty('--index', index);
            ellipse.classList.add('fall');
          });
        });
    }

    if (scrollTop <= 200) {
      ellipses.forEach(ellipse => {
        ellipse.classList.remove('fall'); 
        ellipse.classList.add('rise');
        setTimeout(() => {
          ellipse.classList.remove('rise');
        }, 1000); 
      });
    }
  };

  const createEllipses = () => {
    const container = document.querySelector('.animated-background');
    for (let i = 0; i < 45; i++) {
      const ellipse = document.createElement('div');
      ellipse.classList.add('ellipse');
      ellipse.style.left = `${Math.random() * 100}vw`;
      ellipse.style.top = `${Math.random() * 100}vh`;
      ellipse.style.animationDuration = `${Math.random() * 30 + 10}s`;
      ellipse.style.animationDelay = `0s`;

      const directionX = Math.random() < 0.5 ? -1 : 1;
      const directionY = Math.random() < 0.5 ? -1 : 1;
      const distanceX = Math.random() * 100 + 50;
      const distanceY = Math.random() * 100 + 50;

      ellipse.style.setProperty('--distance-x', `${directionX * distanceX}vw`);
      ellipse.style.setProperty('--distance-y', `${directionY * distanceY}vh`);

      container.appendChild(ellipse);
    }
  };
  
  export default HelloPage;
