import React from 'react';
import '../styles/custom-btn.scss';

const CustomButton = ({ children, colorInverted, ...otherProps }) => {
  return (
    <React.Fragment>
      <button
        className={`${colorInverted ? 'inverted' : ''} btn-custom`}
        {...otherProps}
      >
        {children}
      </button>
    </React.Fragment>
  );
};

export default CustomButton;
