import React from 'react';
import './appBlock.css';
import { Reveal } from '/src/animations/reveal.tsx';
import ShakeHover from '/src/animations/shakeHover.jsx';
// import TiltCard from '/src/animations/tiltCard.jsx';
// import ScrollAnimTo from '/src/animations/scrollBlockAnim.jsx'

function AppBlock() {
  return (
    <div className="container">
    <div className="responsive-section">
      <div className="stack-block">
        <Reveal><h2 className="app-heading">Comprehensive app development</h2></Reveal>
        <div className="app-sub-heading">
          <Reveal><p> Our group is experts in creating personalized mobile applications that relate to your target audience and improve your business procedures.</p></Reveal>
          <Reveal><p> We specialize in designing intuitive and user-friendly iOS and Android applications that offer superior user knowledge. We utilize the latest technology in our work and choose our approach depending on the size and goals of the business.</p></Reveal>
        </div>
        
        <div className="tech-stack">
      <ShakeHover>
        <div className="tech-item">
          <img src="/swift.svg" alt="Swift programming language" title="Swift - iOS App Development" className="tech-icon" />
          <span>Swift</span>
        </div>
      </ShakeHover>

      <ShakeHover>
        <div className="tech-item">
          <img src="/kotlin.svg" alt="Kotlin programming language" title="Kotlin - Android App Development" className="tech-icon" />
          <span>Kotlin</span>
        </div>
      </ShakeHover>

      <ShakeHover>
        <div className="tech-item">
          <img src="/csharp.svg" alt="C# programming language" title="C# - Cross-Platform Development" className="tech-icon" />
          <span>C#</span>
        </div>
      </ShakeHover>

      <ShakeHover>
        <div className="tech-item">
          <img src="/redisdb.svg" alt="Redis database" title="Redis - In-Memory Database" className="tech-icon" />
          <span>Redis</span>
        </div>
      </ShakeHover>

      <ShakeHover>
        <div className="tech-item">
          <img src="/spring.svg" alt="Spring Boot framework" title="Spring Boot - Backend Framework" className="tech-icon" />
          <span>Spring Boot</span>
        </div>
      </ShakeHover>
        </div>

      </div>
      <div className="image-block">
        <div className="caption-arrow-block">
        <div className="image-container"> 
            <h4 className="app-caption">Mobile application cases</h4>
            <h6 className="image-caption">Innovative apps ready to launch successfully on a variety of devices and operating systems</h6>
        </div>
        <div className="arrow-container">
        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" title="Expand content">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z" fill="currentColor" />
            </svg>
        </div>
        </div>
        <div className="iphone-video-block">
        <img src="/iphone.png" alt="iPhone showing mobile application" title="iPhone showcasing mobile applications" className="app-image" />
        <video 
            className="app-video" 
            autoPlay 
            muted 
            loop 
            playsInline 
            preload="auto" 
            aria-label="Video demonstration of the mobile application"
            poster="/reserveiphone.png" 
            title="Mobile application video demo"
        >
            <source src="/videoiphone.mp4" type="video/mp4"/>
            <img src="/reserveiphone.png" alt="Backup image for video content" title="Image of mobile application content" />
            <p>Your browser does not support the video tag. Please consider updating your browser.</p>
        </video>
        </div>
      </div>
    </div>
    </div>
  );
}

export default AppBlock;