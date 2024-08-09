import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const UserGroupSearch = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Grupo de Usuários" />
    </HomeViewContainer>
  );
};

export default UserGroupSearch;
