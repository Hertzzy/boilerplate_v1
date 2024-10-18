// src/components/DarkModeButton.tsx
import React from 'react';
import { IoSunnySharp } from 'react-icons/io5';
import { BsMoonStarsFill } from 'react-icons/bs';
import styled from 'styled-components';

const Button = styled.div`
  font-size: 28px;
  margin-top: 8px;
  margin-right: 20px;
  cursor: pointer;
`;

interface DarkModeButtonProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeButton: React.FC<DarkModeButtonProps> = ({
  isDarkMode,
  toggleDarkMode
}) => {
  return (
    <Button onClick={toggleDarkMode}>
      {isDarkMode ? <BsMoonStarsFill /> : <IoSunnySharp />}
    </Button>
  );
};

export default DarkModeButton;
