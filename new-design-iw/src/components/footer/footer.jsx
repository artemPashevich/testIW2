import React, { useEffect, useState } from 'react';
import './footer.css';
import HoverLink from '/src/animations/hover.jsx';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">
      {isLargeScreen ? (
        <div className="footer-large">
            <div className="footer-logo-section">
              <div><img className="footer-logo" src="/logo20.png" alt="Logo Innovate Work" /></div>
                <div className="footer-copyright">
                    © {currentYear} Innovate Work, LLC
                </div>
            </div>
        <footer className="footer">
          <div className="footer-section services">
            <div className="T">SERVICES</div>
            <ul>
              <li><a href="#"><HoverLink text="Web development" /></a></li>
              <li><a href="#"><HoverLink text="App development" /></a></li>
              <li><a href="#"><HoverLink text="Launching startups" /></a></li>
            </ul>
          </div>
          <div className="footer-section contacts">
            <div className="T">CONTACTS</div>
            <ul>
              <li><a href="mailto:contact@innovatework.net"><HoverLink text="contact@innovatework.net" /></a></li>
              <li><a href="tel:+19494364061"><HoverLink text="+1 949 436 4061"/></a></li>
            </ul>
          </div>
          <div className="footer-section social">
          <div className="T">SOCIAL</div>
          <ul>
            <div className="ul-social">
                <li><a href="https://twitter.com/InnovateWork" className="social-icon" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a></li>
                <li><a href="https://www.facebook.com/innovatework.net/" className="social-icon" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a></li>
                <li><a href="https://www.instagram.com/innovateworknet/" className="social-icon" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a></li>
            </div>
            </ul>
        </div>
          <div className="footer-section cases">
            <div className="T">CASES</div>
            <ul>
              <li><a href="#"><HoverLink text="Custom website" /></a></li>
              <li><a href="#"><HoverLink text="Mobile application" /></a></li>
            </ul>
          </div>
          <div className="footer-section company">
            <div className="T">COMPANY</div>
            <ul>
              <li><a href="#"><HoverLink text="About" /></a></li>
              <li><a href="/terms"><HoverLink text="Terms of Service"/> </a></li>
              <li><a href="/policyprivacy"><HoverLink text="Privacy policy"/> </a></li>
            </ul>
          </div>
          </footer>
        </div>
      ) : (
        <div className="footer-small">
            <footer className="footer">
          <div className="footer-section services">
            <div className="T">SERVICES</div>
            <ul>
              <li><a href="#"><HoverLink text="Web development" /></a></li>
              <li><a href="#"><HoverLink text="App development" /></a></li>
              <li><a href="#"> <HoverLink text="Launching startups" /></a></li>
            </ul>
          </div>
          <div className="footer-section cases">
            <div className="T">CASES</div>
            <ul>
                <li><a href="#"><HoverLink text="Custom website" /></a></li>
                <li><a href="#"><HoverLink text="Mobile application" /></a></li>
            </ul>
          </div>
          <div className="footer-section contacts">
            <div className="T">CONTACTS</div>
            <ul>
                <li><a href="mailto:contact@innovatework.net"><HoverLink text="contact@innovatework.net" /></a></li>
                <li><a href="tel:+19494364061"><HoverLink text="+1 949 436 4061"/></a></li>
            </ul>
          </div>
          <div className="footer-section company">
            <div className="T">COMPANY</div>
            <ul>
            <li><a href="#"><HoverLink text="About" /></a></li>
              <li><a href="/terms"><HoverLink text="Terms of Service"/> </a></li>
              <li><a href="/policyprivacy"><HoverLink text="Privacy policy"/> </a></li>
            </ul>
          </div>
          </footer>
          <div className="footer-logo-section">
            <div><img className="footer-logo" src="/logo20.png" alt="Logo Innovate Work" /></div>
            <div className="footer-copyright">
              © {currentYear} Innovate Work, LLC
            </div>
            <div className="footer-social">
            <a href="https://twitter.com/InnovateWork" className="social-icon" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.facebook.com/innovatework.net/" className="social-icon" aria-label="Facebook">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/innovateworknet/" className="social-icon" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
};

export default Footer;