import React from 'react';
import './textBlock.css';
import { Reveal } from '/src/animations/reveal.tsx';

function TextBlock() {
  return (
    <div className="container">
    <div className="text-block">
      <Reveal>
      <h2 className="main-heading">We create, develop, and enhance your digital presence</h2>
      </Reveal>
      <Reveal>
      <p className="sub-heading">At InnovateWork, your victory is our priority. Our dedication lies in delivering results that surpass your expectations and providing exceptional service</p>
      </Reveal>
    </div>
    </div>
  );
}

export default TextBlock;