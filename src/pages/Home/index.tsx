import { FaHome } from 'react-icons/fa';
import Header from '../../components/Headers';
import { HomeViewContainer } from './HomeStyles';
import Container from '../../components/container';

const Home = () => {
  return (
    <HomeViewContainer>
      <Header pageTitle="Home" icon={<FaHome />} />
      <Container>
        <h1>Home Page</h1>
      </Container>
    </HomeViewContainer>
  );
};

export default Home;
