import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const UserPasswordUpdate = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Alterar Senha" />
    </HomeViewContainer>
  );
};

export default UserPasswordUpdate;
