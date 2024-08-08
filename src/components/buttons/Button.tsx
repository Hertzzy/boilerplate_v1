// components/Button.tsx

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'; // Tipos válidos para o botão
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  color?: string;
  textColor?: string;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ color }) => color || '#536d82'};
  color: ${({ textColor }) => textColor || '#fff'};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;

  &:hover {
    background-color: ${({ color }) => (color ? `${color}cc` : '#4a5c73')};
  }

  &:focus {
    outline: none;
  }
`;

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, children, color, textColor }) => {
  return (
    <StyledButton type={type} onClick={onClick} color={color} textColor={textColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
