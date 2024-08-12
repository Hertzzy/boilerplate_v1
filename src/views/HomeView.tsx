import styled from 'styled-components';
import HeaderView from '../components/HeaderView';
import { useTheme } from '../context/ThemeContext';

const HomeViewContainer = styled.div<{ $isDarkMode: boolean }>`
  height: 100%;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#536d82')}; // Cor do texto baseado no tema
`;

const Home = () => {
  const { isDarkMode } = useTheme(); // Obtém o estado do tema

  return (
    <HomeViewContainer $isDarkMode={isDarkMode}>
      <HeaderView pageTitle="Home" />
      <p>Welcome to the Home page!</p>
    </HomeViewContainer>
  );
};

export default Home;
