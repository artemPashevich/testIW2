import React from 'react';
import './radioButton.css';

const RadioButton = ({ label, name, value, checked, onChange }) => {
  return (
    <div className="radio-button-container">
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="radio-button-input"
      />
      <label htmlFor={value} className="radio-button-label">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;