import React, { useState } from 'react';
import './header.css';
import HoverLink from '/src/animations/hover.jsx';
import { LogoAnimation } from '/src/animations/logoAnim.jsx';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <LogoAnimation /> 
      <nav className={isOpen ? 'nav open' : 'nav'}>
        <ul>
            <li data-text="Services"> <HoverLink text="Services" /></li>
            <li data-text="Cases"> <HoverLink text="Cases" /></li>
            <li data-text="About"> <HoverLink text="About" /></li>
            <li data-text="Contacts"> <HoverLink text="Contacts" /></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={handleToggle}>
        <div className={isOpen ? 'line1 open' : 'line1'}></div>
        <div className={isOpen ? 'line2 open' : 'line2'}></div>
        <div className={isOpen ? 'line3 open' : 'line3'}></div>
      </div>
    </header>
  );
}

export default Header;