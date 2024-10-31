import Container from '../../components/container';
import Header from '../../components/Headers';
import { useAuth } from '../../context/AuthContext';
import { FaHome } from 'react-icons/fa';

const Home = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header icon={<FaHome />} pageTitle="Home" isDarkMode />

      <h2>Bem-vindo, {user ? user.name : ' '}!</h2>
    </Container>
  );
};

export default Home;
