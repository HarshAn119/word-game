import React from 'react';

const CustomText = ({ className, text }) => {
  return (
    <>
      <p className={className}>{text}</p>
    </>
  );
};

export default CustomText;
