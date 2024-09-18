// src/components/MenuDropdown/MenuDropdown.tsx
import React, { useState } from 'react';

import Loading from '../alerts/Loading';
import { DropdownContainer, DropdownItem } from './DropdownStyles';

interface NavLinkProps {
  links?: Array<{ to: string; label: string }>; // Lista de links
}

const MenuDropdown: React.FC<NavLinkProps> = ({ links }) => {
  return (
    <DropdownContainer>
      {links?.map((link, index) => (
        <DropdownItem key={index} to={link.to}>
          {link.label}
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default MenuDropdown;
