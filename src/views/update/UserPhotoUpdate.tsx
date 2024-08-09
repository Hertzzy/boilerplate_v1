import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const UserPhotoUpdate = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Editar foto de usuário" />
    </HomeViewContainer>
  );
};

export default UserPhotoUpdate;
