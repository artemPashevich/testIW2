import React from 'react';
import './main-button.css';

const MainButton = ({ type, title, disabled, onClick }) => {
  return (
    <button className="button" type={type} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
};

export default MainButton;