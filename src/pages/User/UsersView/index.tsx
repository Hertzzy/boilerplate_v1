import { FaPlus, FaUsers } from 'react-icons/fa';
import Container from '../../../components/container';
import Header from '../../../components/Headers';
import ButtonRoute from '../../../components/common/Buttons/ButtonRoute';

const UsersView = () => {
  return (
    <Container>
      <Header pageTitle="Usuários" icon={<FaUsers />} />
      <ButtonRoute to="/user-create" icon={<FaPlus />}>
        Cadastar usuário
      </ButtonRoute>
    </Container>
  );
};

export default UsersView;
