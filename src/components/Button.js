import React from 'react';
import '../styles/custom-btn.scss';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div className="btn-custom">
      <button {...otherProps}>{children}</button>
    </div>
  );
};

export default CustomButton;
