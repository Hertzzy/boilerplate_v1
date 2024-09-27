import HeaderView from '../../components/Headers';
import { Container } from './SettingsStyle';

const SettingsView = () => {
  return (
    <Container>
      <HeaderView pageTitle="Configurações" />
      <p>Welcome to the Settings page!</p>
    </Container>
  );
};

export default SettingsView;
