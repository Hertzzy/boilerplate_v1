// src/components/Headers/index.tsx
import React from 'react';
import {
  HeaderViewProps,
  HeaderContainer,
  PageTitle,
  Icon
} from './HeaderStyles';
import DarkModeButton from '../common/DarkModeButton';

const Header: React.FC<HeaderViewProps> = ({
  pageTitle,
  icon,
  isDarkMode,
  toggleDarkMode
}) => {
  return (
    <HeaderContainer>
      <PageTitle>
        {icon && <Icon>{icon}</Icon>}
        {pageTitle}
      </PageTitle>
      <DarkModeButton isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </HeaderContainer>
  );
};

export default Header;
