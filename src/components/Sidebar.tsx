// src/components/Sidebar.tsx

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FaHome,
  FaUser,
  FaCog,
  FaAngleRight,
  FaAngleLeft,
  FaArchive,
  FaChevronDown,
  FaChevronUp,
  FaBox
} from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import NavLinks from './nav/NavLinks';
import NavLinkRegisters from './nav/NavLinkRegisters';
import { useTheme } from '../context/ThemeContext';

interface SidebarProps {
  $isOpen: boolean;
}

// CSS DO COMPONENTE SIDEBAR
const SidebarContainer = styled.div<{ $isOpen: boolean; $isDarkMode: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? '250px' : '80px')};
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#333' : '#fff')};
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#536d82')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;
  position: relative;
  border-radius: 10px;
  height: 97vh;
`;

const MenuLogo = styled.div<SidebarProps>`
  font-size: 32px;
  padding: 20px 5px;
`;

const MenuItem = styled(Link)<{ $isOpen: boolean; isActive?: boolean; $isDarkMode: boolean }>`
  width: 100%;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  cursor: pointer;
  text-decoration: none;
  color: ${({ isActive, $isDarkMode }) =>
    isActive ? ($isDarkMode ? '#fff' : '#fff') : $isDarkMode ? '#aaa' : '#536d82'};
  background-color: ${({ isActive, $isDarkMode }) =>
    isActive ? ($isDarkMode ? '#444' : '#536d82') : $isDarkMode ? '#333' : '#fff'};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#536d82')};
    color: #fff;
  }

  span {
    display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
    margin-left: 15px;
    margin-top: 2px;
    transition: display 0.3s;
    font-size: 1.1rem;
  }

  .menu-icon {
    font-size: 1.6rem;
  }

  .iconChevron {
    font-size: 1rem;
    margin-left: auto;
    margin-top: 7px;
  }
`;

const ToggleButton = styled.button<{ $isOpen: boolean; $isDarkMode: boolean }>`
  position: absolute;
  bottom: 20px;
  left: ${({ $isOpen }) => ($isOpen ? '200px' : '28px')};
  background: none;
  border: none;
  color: #536d82;
  font-size: 24px;
  cursor: pointer;
  transition: left 0.3s;

  .menu-icon {
    color: ${({ $isDarkMode }) => ($isDarkMode ? '#fff' : '#536d82')};
  }
`;

const Sidebar: React.FC = () => {
  // Menu aberto
  const [isOpen, setIsOpen] = useState(true);
  // Menu Dropdown
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Location usado para deixar os links ativos quando estiver na página
  const location = useLocation();
  //Darkmode
  const { isDarkMode } = useTheme();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <SidebarContainer $isOpen={isOpen} $isDarkMode={isDarkMode}>
      <ToggleButton $isOpen={isOpen} onClick={toggleSidebar} $isDarkMode={isDarkMode}>
        {isOpen ? <FaAngleLeft className="menu-icon" /> : <FaAngleRight className="menu-icon" />}
      </ToggleButton>

      <MenuLogo $isOpen={isOpen}>
        <FaArchive />
      </MenuLogo>

      <MenuItem to="/" $isOpen={isOpen} isActive={location.pathname === '/'} $isDarkMode={isDarkMode}>
        <FaHome className="menu-icon" />
        <span>Home</span>
      </MenuItem>

      <MenuItem
        to="#"
        $isOpen={isOpen}
        onClick={() => toggleDropdown('user')}
        isActive={false}
        $isDarkMode={isDarkMode}
      >
        <FaUser className="menu-icon" />
        <span>Usuário</span>
        {isOpen &&
          (openDropdown === 'user' ? (
            <FaChevronUp className="iconChevron" />
          ) : (
            <FaChevronDown className="iconChevron" />
          ))}
      </MenuItem>
      {openDropdown === 'user' && isOpen && <NavLinks />}

      <MenuItem
        to="#"
        $isOpen={isOpen}
        onClick={() => toggleDropdown('register')}
        isActive={false}
        $isDarkMode={isDarkMode}
      >
        <FaBox className="menu-icon" />
        <span>Cadastro</span>
        {isOpen &&
          (openDropdown === 'register' ? (
            <FaChevronUp className="iconChevron" />
          ) : (
            <FaChevronDown className="iconChevron" />
          ))}
      </MenuItem>
      {openDropdown === 'register' && isOpen && <NavLinkRegisters />}

      <MenuItem to="/settings" $isOpen={isOpen} isActive={location.pathname === '/settings'} $isDarkMode={isDarkMode}>
        <FaCog className="menu-icon" />
        <span>Settings</span>
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
