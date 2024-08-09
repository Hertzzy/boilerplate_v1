import styled from 'styled-components';
import HeaderView from '../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const Home = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Home" />
    </HomeViewContainer>
  );
};

export default Home;
