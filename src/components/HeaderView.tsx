import styled from 'styled-components';
// import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface HeaderViewProps {
  pageTitle: string;
}

const HeaderContainer = styled.header<{ $isDarkMode: boolean }>`
  display: flex;
  justify-content: space-between;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#536d82')}; // Cor do texto baseado no tema
`;

const PageTitle = styled.h1<{ $isDarkMode: boolean }>`
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#536d82')}; // Cor do título baseado no tema
`;

// const ThemeToggleButton = styled.button<{ $isDarkMode: boolean }>`
//   background: none;
//   border: none;
//   color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#536d82')}; // Cor do ícone baseado no tema
//   font-size: 24px;
//   cursor: pointer;
//   transition: left 0.3s;
//   margin-right: 15px;
// `;

const HeaderView: React.FC<HeaderViewProps> = ({ pageTitle }) => {
  const { isDarkMode } = useTheme();
  return (
    <HeaderContainer $isDarkMode={isDarkMode}>
      <PageTitle $isDarkMode={isDarkMode}>{pageTitle}</PageTitle>
      {/* <ThemeToggleButton $isDarkMode={isDarkMode} onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggleButton> */}
    </HeaderContainer>
  );
};

export default HeaderView;
