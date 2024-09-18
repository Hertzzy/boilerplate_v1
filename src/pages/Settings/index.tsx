import styled from 'styled-components';
import HeaderView from '../../components/Headers';

const Container = styled.div`
  height: 100%;
`;

const SettingsView = () => {
  return (
    <Container>
      <HeaderView pageTitle="Configurações" />
      <p>Welcome to the Settings page!</p>
    </Container>
  );
};

export default SettingsView;
