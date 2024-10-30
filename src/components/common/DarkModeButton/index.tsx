// src/components/common/DarkModeButton/index.tsx
import React from 'react';
import { Button } from './DarkModeStyles'; // Certifique-se de que este caminho está correto
import { useTheme } from '../../../context/ThemeContext';
import { BsMoonStars, BsSun } from 'react-icons/bs';

const DarkModeButton: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Button isDarkMode={isDarkMode} onClick={toggleDarkMode}>
      {isDarkMode ? <BsMoonStars /> : <BsSun />}
    </Button>
  );
};

export default DarkModeButton;
