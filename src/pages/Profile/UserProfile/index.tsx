import { FaUser } from 'react-icons/fa';
import Header from '../../../components/Headers';
import Container from '../../../components/container';

const UserProfile = () => {
  return (
    <Container>
      <Header pageTitle="Perfil de Usuário" icon={<FaUser />} isDarkMode />
      <h2>Meu perfil</h2>
    </Container>
  );
};

export default UserProfile;
