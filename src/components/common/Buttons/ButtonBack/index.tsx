// src/components/ButtonBack.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { ButtonBackProps, StyledButton } from './ButtonBackStyle';

const ButtonBack: React.FC<ButtonBackProps> = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <StyledButton onClick={handleClick}>
      <TiArrowBack />
    </StyledButton>
  );
};

export default ButtonBack;