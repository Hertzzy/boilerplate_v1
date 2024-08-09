import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const SuplierSearch = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Pesquisar Fornecedor" />
    </HomeViewContainer>
  );
};

export default SuplierSearch;
