// src/components/ButtonRoute.tsx

import React from 'react';
import { StyledButton, ButtonSubmitProps } from './ButtonSubmitStyle';
import { FaRegSave } from 'react-icons/fa';

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ children }) => {
  return (
    <StyledButton>
      <FaRegSave />
      {children}
    </StyledButton>
  );
};

export default ButtonSubmit;
