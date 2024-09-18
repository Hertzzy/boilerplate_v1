import { FaHome } from 'react-icons/fa';
import Header from '../../components/Headers';
import { HomeViewContainer } from './HomeStyles';

const Home = () => {
  return (
    <HomeViewContainer>
      <Header pageTitle="Home" icon={<FaHome />} />
      <p>Welcome to the Home page!</p>
    </HomeViewContainer>
  );
};

export default Home;
