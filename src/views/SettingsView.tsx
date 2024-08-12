import styled from 'styled-components';
import HeaderView from '../components/HeaderView';

const HomeViewContainer = styled.div`
  height: 100%;
`;

const SettingsView = () => {
  return (
    <HomeViewContainer>
      <HeaderView pageTitle="Configurações" />
      <p>Welcome to the Settings page!</p>
    </HomeViewContainer>
  );
};

export default SettingsView;
