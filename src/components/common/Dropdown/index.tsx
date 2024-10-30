// src/components/MenuDropdown.tsx
import React from 'react';
import { useTheme } from '../../../context/ThemeContext'; // Verifique o caminho
import { DropdownContainer, DropdownItem } from './DropdownStyles';

interface NavLinkProps {
  links?: Array<{ to: string; label: string }>; // Lista de links
}

const MenuDropdown: React.FC<NavLinkProps> = ({ links }) => {
  const { isDarkMode } = useTheme();

  return (
    <DropdownContainer className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      {links?.map((link, index) => (
        <DropdownItem key={index} to={link.to} className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          {link.label}
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
};

export default MenuDropdown;
