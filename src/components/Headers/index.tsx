// src/components/Headers/index.tsx
import React from 'react';
import { HeaderViewProps, HeaderContainer, PageTitle, Icon } from './HeaderStyles';
import { useTheme } from '../../context/ThemeContext';
import DarkModeButton from '../../components/common/DarkModeButton'; // Importando o botão

const Header: React.FC<HeaderViewProps> = ({ pageTitle, icon }) => {
  const { isDarkMode } = useTheme();

  return (
    <HeaderContainer isDarkMode={isDarkMode}>
      <PageTitle isDarkMode={isDarkMode}>
        {icon && <Icon>{icon}</Icon>}
        {pageTitle}
      </PageTitle>

      <DarkModeButton />
    </HeaderContainer>
  );
};

export default Header;
