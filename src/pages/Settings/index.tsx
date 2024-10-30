// src/pages/Settings/index.tsx
import { Container } from './SettingsStyle';
import Header from '../../components/Headers';
import { IoMdSettings } from 'react-icons/io';

const SettingsView = () => {
  return (
    <Container>
      <Header icon={<IoMdSettings />} pageTitle="Configurações" />
      <p>Welcome to the Settings page!</p>
    </Container>
  );
};

export default SettingsView;
