// src/pages/Settings/index.tsx
import Container from '../../components/container';
import Header from '../../components/Headers';
import { IoMdSettings } from 'react-icons/io';

const SettingsView = () => {
  return (
    <Container>
      <Header icon={<IoMdSettings />} pageTitle="Configurações" isDarkMode />

      <h2>Welcome to the Settings page!</h2>
    </Container>
  );
};

export default SettingsView;
