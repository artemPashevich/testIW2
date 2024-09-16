import React from 'react';
import './textField.css';

const TextField = ({ label, type = 'text', name, value, onChange, error }) => {
  return (
    <div className="textfield-container">
      <label className="textfield-label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`textfield-input ${error ? 'textfield-error' : ''}`}
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default TextField;