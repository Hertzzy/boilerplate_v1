import { FaUsers } from 'react-icons/fa';
import Container from '../../../components/container';
import Header from '../../../components/Headers';

const UsersView = () => {
  return (
    <Container>
      <Header pageTitle="Usuários" icon={<FaUsers />} isDarkMode />
      <h2>Editar usuário</h2>
    </Container>
  );
};

export default UsersView;
