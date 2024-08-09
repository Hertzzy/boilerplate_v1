import styled from 'styled-components';
import HeaderView from '../../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const EmployeeSearch = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Pesquisar Funcionários" />
    </HomeViewContainer>
  );
};

export default EmployeeSearch;
