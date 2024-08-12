import { createGlobalStyle } from 'styled-components';
// import { useTheme } from '../context/ThemeContext';

const GlobalStyle = createGlobalStyle<{ isDarkMode: boolean }>`
  body {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#000' : '#fff')};
    color: ${({ isDarkMode }) => (isDarkMode ? '#fff' : '#000')};
    transition: background-color 0.3s, color 0.3s;
  }
`;

export default GlobalStyle;
