import { FaHome } from 'react-icons/fa';
import Header from '../../components/Headers';
import Container from '../../components/container';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const { user } = useAuth();
  return (
    <Container>
      <Header pageTitle="Home" icon={<FaHome />} />
      <h2>Bem-vindo, {user ? user.name : ' '}!</h2>
    </Container>
  );
};

export default Home;
