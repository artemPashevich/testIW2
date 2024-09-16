import React from 'react';
import './webBlock.css'; 
import { Reveal } from '/src/animations/reveal.tsx';
import ShakeHover from '/src/animations/shakeHover.jsx';
import TiltCard from '/src/animations/tiltCard.jsx';

function WebBlock() {
    return (
        <div className="container">
          <div className="web-responsive-section">
          <div className="web-image-block">
              <div className="caption-arrow-block">
                <div className="web-image-container">
                  <h4 className="web-caption">Website cases</h4>
                  <h6 className="web-image-caption">
                    Our team strives to fill the site with customized solutions, to make it memorable and special
                  </h6>
                </div>
                <div className="arrow-container">
                  <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" title="Expand content">
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M13.172 12l-4.95 4.95 1.414 1.414L16 12l-6.364-6.364-1.414 1.414z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              {/* <TiltCard> */}
              <div className="web-video-block">
                <img src="/Mac Book 16 pro.png" alt="MacBook Pro showing web application" title="MacBook Pro displaying web applications" className="web-image" />
                <video 
                    className="web-video" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto" 
                    aria-label="Video demonstration of a web application on a MacBook"
                    poster="reservemac.png"
                    title="Web application video demo"
                >
                <source src="/videomac.mp4" type="video/mp4" />
                <img src="reservemac.png" alt="Backup image for web application video" title="Image of a web application demo" />
                <p>Your browser does not support the video tag. Please consider updating your browser.</p>
                </video>
              </div>
              {/* </TiltCard> */}
            </div>
    
            <div className="web-stack-block">
            <Reveal><h2 className="web-heading">Custom website creation</h2></Reveal>
              <div className="web-sub-heading">
              <Reveal>
              <p>
                  We tailor our web development resolutions to fulfill your specific corporate demands, ensuring a seamless and engaging online presence.
                </p>
              </Reveal>
              <Reveal>
              <p>
                  Website development technologies encompass a wide range of tools, languages, frameworks, and platforms used to create and maintain websites. Here's an overview of some commonly used technologies in our website development:
                </p>
              </Reveal>
              </div>
    
              <div className="web-tech-stack">
              <ShakeHover>
                <div className="tech-item">
                  <img src="/react.svg" alt="React logo" title="React - Frontend development library" className="tech-icon" />
                  <span>React</span>
                </div>
              </ShakeHover>

                <ShakeHover>
                <div className="tech-item">
                  <img src="/angular.svg" alt="Angular logo" title="Angular - Frontend framework for web development" className="tech-icon" />
                  <span>Angular</span>
                </div>
                </ShakeHover>

                <ShakeHover>
                <div className="tech-item">
                  <img src="/htmlcss.svg" alt="CSS and HTML logos" title="HTML and CSS - Web styling and structure languages" className="tech-icon" />
                  <span>CSS/HTML</span>
                </div>
                </ShakeHover>

                <ShakeHover>
                <div className="tech-item">
                  <img src="/postgresql.svg" alt="PostgreSQL database logo" title="PostgreSQL - Relational database management system" className="tech-icon" />
                  <span>PostgreSQL</span>
                </div>
              </ShakeHover>

              <ShakeHover>
              <div className="tech-item">
                  <img src="/mongodb.svg" alt="MongoDB database logo" title="MongoDB - NoSQL database system" className="tech-icon" />
                  <span>MongoDB</span>
                </div>
              </ShakeHover>

              </div>
            </div>
          </div>
        </div>
      );
}

export default WebBlock;
