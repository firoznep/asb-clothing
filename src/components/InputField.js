import React from 'react';
import '../styles/input-field.scss';

const InputField = ({ type, label, value, ...otherProps }) => {
  return (
    <div className="form-input">
      <input type={type} {...otherProps} />
      {label ? (
        <label className={`${value ? 'shrink' : null} ${label}-label`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default InputField;
