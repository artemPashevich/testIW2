import React from 'react';
import './hover.css'; // Assuming your CSS is in this file

const HoverLink = ({ text, hoverColor = '#ff6347', className = '', ...props }) => {
    return (
      <div className={`link-container ${className}`}>
        <span
          className="link"
          data-text={text}
          style={{ '--hover-color': hoverColor }}
          {...props}
        >
          {text}
        </span>
      </div>
    );
  };

export default HoverLink;