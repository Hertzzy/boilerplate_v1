import React from 'react';
import { StyledButton, ButtonProps } from './ButtonStyle';

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', disabled, children }) => {
  return (
    <StyledButton className="btn-style" onClick={onClick} type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
