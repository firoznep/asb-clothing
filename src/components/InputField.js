import React from 'react';
import '../styles/input-field.scss';

const InputField = ({ type, label, isValue, ...otherProps }) => {
  return (
    <div className="form-input">
      <input type={type} {...otherProps} />
      {label ? (
        <label className={`${isValue ? 'shrink' : null} ${label}-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default InputField;
