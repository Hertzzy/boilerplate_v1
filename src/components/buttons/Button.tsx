// src/components/buttons/Button.tsx
import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: #536d82;
  color: white;
  border: none;
  padding: 10px 0px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;

  &:hover {
    background-color: #465c6e;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', disabled, children }) => {
  return (
    <StyledButton onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
