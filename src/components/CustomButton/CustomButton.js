import React from 'react';
import './CustomButton.css';

const CustomButton = ({ className, text, onClick }) => {
  return (
    <>
      <button id="customButton" onClick={onClick} className={className}>
        {text}
      </button>
    </>
  );
};

export default CustomButton;
