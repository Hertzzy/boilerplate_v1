// src/components/Header/Header.tsx
import React from 'react';
import { HeaderViewProps, HeaderContainer, PageTitle, Icon } from './HeaderStyles';

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
