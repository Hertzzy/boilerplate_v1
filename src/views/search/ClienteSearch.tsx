import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;
const ClienteSearch = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Pesquisar Cliente" />
    </HomeViewContainer>
  );
};

export default ClienteSearch;
