import React, { useEffect, useState, useRef } from 'react';
import './stepBlock.css';

const ProjectSteps = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991);
    const greenLineRef = useRef(null);
    const [lastScrollTop, setLastScrollTop] = useState(0);
  
    const stepRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
    useEffect(() => {
      const handleResize = () => {
        setIsLargeScreen(window.innerWidth > 991);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    useEffect(() => {
        const updateBorderHeight = (entries) => {
            entries.forEach((entry, index) => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const isScrollingDown = scrollTop > lastScrollTop;
                const stepPercentage = ((index + 1) / stepRefs.length) * 100;
    
                if (entry.isIntersecting) {
                    stepRefs.forEach((ref, idx) => {
                        if (ref.current) {
                            ref.current.querySelector('.step-number').classList.remove('animate-shadow');
                        }
                    });
    
                    stepRefs[index].current.querySelector('.step-number').classList.add('animate-shadow');
    
                    greenLineRef.current.style.setProperty('--border-height', `${stepPercentage}%`);
                }
    
                setLastScrollTop(scrollTop);
            });
        };
    
        const observer = new IntersectionObserver(updateBorderHeight, {
            threshold: 1.0, // Change this to 1.0 for full visibility check
        });
    
        stepRefs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });
    
        return () => {
            stepRefs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, [lastScrollTop, stepRefs]);


  return (
    <div className="container">
      {isLargeScreen ? (
        <div className="project-steps-large">
            <h2 className="step-title">Your project in steps</h2>

        <div className="steps-block">
            <div className="steps-container-left">
                <div className="step step-2" ref={stepRefs[1]}>
                    <div className="step-number">02</div>
                    <div className="step-description">
                        <h3>Development</h3>
                        <p>This involves implementing, covering both frontend and backend aspects, such as setting up databases, creating APIs, and developing interactive features.</p>
                    </div>
                </div>

                <div className="step step-4" ref={stepRefs[3]}>
                    <div className="step-number">04</div>
                    <div className="step-description">
                        <h3>Deployment</h3>
                        <p>This stage involves transferring the finalized code to the production environment, configuring settings, and ensuring all components are correctly integrated.</p>
                    </div>
                </div>
            </div>

            <div className="green-line" ref={greenLineRef}></div>

            <div className="steps-container-right">
                <div className="step step-1" ref={stepRefs[0]}>
                    <div className="step-number">01</div>
                    <div className="step-description">
                        <h3>Design and Prototype</h3>
                        <p>Initial wireframes are created using tools like Figma. This process involves designing content blocks, filters, and forms with a focus on usability and accessibility.</p>
                    </div>
                </div>

                <div className="step step-3" ref={stepRefs[2]}>
                    <div className="step-number">03</div>
                    <div className="step-description">
                        <h3>Testing</h3>
                        <p>The team identifies and fixes bugs, validating the project's quality, security, and performance to ensure it meets all specified requirements before deployment.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
      ) : (
        <div className="project-steps-small">
          <h2 className="step-title">Your project in steps</h2>
          <div className="steps-line" ref={greenLineRef}>
            <div className="step step-1" ref={stepRefs[0]}>
              <div className="step-number">01</div>
              <div className="step-description">
                <h3>Design and Prototype</h3>
                <p>Initial wireframes are created using tools like Figma. This process involves designing content blocks, filters, and forms with a focus on usability and accessibility.</p>
              </div>
            </div>
            <div className="step step-2" ref={stepRefs[1]}>
              <div className="step-number">02</div>
              <div className="step-description">
                <h3>Development</h3>
                <p>This involves implementing, covering both frontend and backend aspects, such as setting up databases, creating APIs, and developing interactive features.</p>
              </div>
            </div>
            <div className="step step-3" ref={stepRefs[2]}>
              <div className="step-number">03</div>
              <div className="step-description">
                <h3>Testing</h3>
                <p>The team identifies and fixes bugs, validating the project's quality, security, and performance to ensure it meets all specified requirements before deployment.</p>
              </div>
            </div>
            <div className="step step-4" ref={stepRefs[3]}>
              <div className="step-number">04</div>
              <div className="step-description">
                <h3>Deployment</h3>
                <p>This stage involves transferring the finalized code to the production environment, configuring settings, and ensuring all components are correctly integrated.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

    

export default ProjectSteps;