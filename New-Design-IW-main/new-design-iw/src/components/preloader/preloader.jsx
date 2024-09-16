import React, { useEffect, useState } from 'react';
import './preloader.css'; 
import { preLoaderAnim } from '/src/animations/preLoaderAnim.js'

const Preloader = () => {
 
    useEffect(()=> {
        preLoaderAnim()
    }, []);

    return (
      <div className="preloader">
        <div className="texts-container">
          <span>Innovate</span>
          <span>Work</span>
          <span>LLC</span>
        </div>
      </div>
    );
  };
  
  export default Preloader;