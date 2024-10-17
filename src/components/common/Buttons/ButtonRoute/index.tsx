import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledButton, ButtonRouteProps } from './ButtonRouteStyle';

const ButtonRoute: React.FC<ButtonRouteProps> = ({ to, children, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledButton onClick={handleClick}>
      {icon && icon}
      {children}
    </StyledButton>
  );
};

export default ButtonRoute;
