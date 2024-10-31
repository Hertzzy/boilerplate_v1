import { FaUsers } from 'react-icons/fa';
import ButtonBack from '../../../components/common/Buttons/ButtonBack';
import Container from '../../../components/container';
import Header from '../../../components/Headers';
import { ButtonContainer } from './UserCreateStyle';

const UserCreate = () => {
  return (
    <Container>
      <Header pageTitle="Usuários" icon={<FaUsers />} isDarkMode />
      <ButtonContainer>
        <ButtonBack to="/users-view">Voltar</ButtonBack>
      </ButtonContainer>
    </Container>
  );
};

export default UserCreate;
