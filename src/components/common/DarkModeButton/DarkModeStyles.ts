// src/components/common/DarkModeButton/DarkModeStyles.ts
import styled from 'styled-components';

export interface DarkModeButtonProps {
  isDarkMode: boolean; // Propriedade para o tema
}

export const Button = styled.div<DarkModeButtonProps>`
  font-size: 22px;
  margin-top: 10px;
  margin-right: 20px;
  cursor: pointer;

  color: ${({ isDarkMode }) => (isDarkMode ? '#f5f5f5' : '#536d82')};
  transition: color 0.3s ease;
`;
