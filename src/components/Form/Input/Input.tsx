import React from 'react';
import { InputProps, StyledInput } from './InputStyle';

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, onChange, borderColor }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} borderColor={borderColor} />
  );
};

export default Input;
