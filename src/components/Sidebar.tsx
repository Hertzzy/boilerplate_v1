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

// Defina uma interface para as propriedades
interface SidebarProps {
  $isOpen: boolean;
}

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? '250px' : '80px')};
  background-color: #fff;
  color: #536d82;
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

const MenuItem = styled(Link)<{ $isOpen: boolean; isActive?: boolean }>`
  width: 100%;
  border-radius: 5px;
  padding: 10px 15px;
  display: flex;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  cursor: pointer;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#fff' : '#536d82')};
  background-color: ${({ isActive }) => (isActive ? '#536d82' : '#fff')};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #536d82;
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

const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 20px;
  left: ${({ $isOpen }) => ($isOpen ? '200px' : '28px')};
  background: none;
  border: none;
  color: #536d82;
  font-size: 24px;
  cursor: pointer;
  transition: left 0.3s;
`;

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <SidebarContainer $isOpen={isOpen}>
      <ToggleButton $isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? <FaAngleLeft className="menu-icon" /> : <FaAngleRight className="menu-icon" />}
      </ToggleButton>

      <MenuLogo $isOpen={isOpen}>
        <FaArchive />
      </MenuLogo>

      <MenuItem to="/" $isOpen={isOpen} isActive={location.pathname === '/'}>
        <FaHome className="menu-icon" />
        <span>Home</span>
      </MenuItem>

      <MenuItem to="#" $isOpen={isOpen} onClick={() => toggleDropdown('user')} isActive={false}>
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

      <MenuItem to="#" $isOpen={isOpen} onClick={() => toggleDropdown('register')} isActive={false}>
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

      <MenuItem to="/settings" $isOpen={isOpen} isActive={location.pathname === '/settings'}>
        <FaCog className="menu-icon" />
        <span>Settings</span>
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
