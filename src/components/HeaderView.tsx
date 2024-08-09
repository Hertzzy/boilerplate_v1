import styled from 'styled-components';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

interface HeaderViewProps {
  pageTitle: string;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const PageTitle = styled.h1``;

const ThemeToggleButton = styled.button<{ $isDarkMode: boolean }>`
  background: none;
  border: none;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#536d82')}; // Cor do ícone (dourado no modo escuro)
  font-size: 24px;
  cursor: pointer;
  transition: left 0.3s;
  margin-right: 15px;
`;

const HeaderView: React.FC<HeaderViewProps> = ({ pageTitle }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <HeaderContainer>
      <PageTitle>{pageTitle}</PageTitle>
      <ThemeToggleButton $isDarkMode={isDarkMode} onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ThemeToggleButton>
    </HeaderContainer>
  );
};

export default HeaderView;
