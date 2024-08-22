// components/Input.tsx
import React from 'react';
import styled from 'styled-components';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  borderColor?: string;
}

const StyledInput = styled.input<{ borderColor?: string }>`
  border: 1px solid ${({ borderColor }) => borderColor || '#ccc'};
  border-radius: 5px;
  padding: 6px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #536d82;
    outline: none;
  }
`;

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, onChange, borderColor }) => {
  return (
    <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} borderColor={borderColor} />
  );
};

export default Input;
