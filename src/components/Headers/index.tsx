// src/components/Header/Header.tsx
import React from 'react';
import { HeaderContainer, PageTitle, Icon } from './HeaderStyles';

interface HeaderViewProps {
  pageTitle: string;
  icon?: React.ReactNode; // Adiciona uma opção para um ícone opcional
}

const Header: React.FC<HeaderViewProps> = ({ pageTitle, icon }) => {
  return (
    <HeaderContainer>
      <PageTitle>
        {icon && <Icon>{icon}</Icon>}
        {pageTitle}
      </PageTitle>
    </HeaderContainer>
  );
};

export default Header;
