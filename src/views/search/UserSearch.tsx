import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const UserSearch = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Pesquisar Usuário" />
    </HomeViewContainer>
  );
};

export default UserSearch;
