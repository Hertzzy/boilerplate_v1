// src/components/Sidebar.tsx
import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaCog,
  FaAngleRight,
  FaAngleLeft,
  FaArchive,
  FaChevronDown,
  FaChevronUp,
  FaBox,
  FaSignOutAlt
} from 'react-icons/fa';

import Dropdown from '../../common/Dropdown';
import Loading from '../../common/Loading';
import { SidebarContainer, MenuLogo, MenuItem, ToggleButton } from './SidebarStyle';
import { useAuth } from '../../../context/AuthContext';

import { useNavigate } from 'react-router';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { logout } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown: string) => setOpenDropdown(openDropdown === dropdown ? null : dropdown);

  // Definindo os links para o dropdown "Usuário"
  const userLinks = [{ to: '/user-profile', label: 'Perfil de usuário' }];
  const registerLinks = [{ to: '/users-view', label: 'Usuários' }];

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      logout();
      setLoading(false);
      navigate('/login');
    }, 1000);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SidebarContainer $isOpen={isOpen}>
      <ToggleButton $isOpen={isOpen} onClick={toggleSidebar}>
        {isOpen ? <FaAngleLeft className="menu-icon" /> : <FaAngleRight className="menu-icon" />}
      </ToggleButton>

      <MenuLogo $isOpen={isOpen}>
        <FaArchive />
      </MenuLogo>

      <MenuItem to="/" $isOpen={isOpen} data-is-active={location.pathname === '/'}>
        <FaHome className="menu-icon" />
        <span>Home</span>
      </MenuItem>

      <MenuItem to="#" $isOpen={isOpen} onClick={() => toggleDropdown('user')}>
        <FaUser className="menu-icon" />
        <span>Usuário</span>
        {isOpen &&
          (openDropdown === 'user' ? (
            <FaChevronUp className="iconChevron" />
          ) : (
            <FaChevronDown className="iconChevron" />
          ))}
      </MenuItem>
      {openDropdown === 'user' && isOpen && <Dropdown links={userLinks} />}

      <MenuItem to="#" $isOpen={isOpen} onClick={() => toggleDropdown('register')}>
        <FaBox className="menu-icon" />
        <span>Cadastro</span>
        {isOpen &&
          (openDropdown === 'register' ? (
            <FaChevronUp className="iconChevron" />
          ) : (
            <FaChevronDown className="iconChevron" />
          ))}
      </MenuItem>
      {openDropdown === 'register' && isOpen && <Dropdown links={registerLinks} />}

      <MenuItem to="/settings" $isOpen={isOpen} data-is-active={location.pathname === '/settings'}>
        <FaCog className="menu-icon" />
        <span>Configurações</span>
      </MenuItem>

      <MenuItem to="#" onClick={handleLogout} $isOpen={isOpen}>
        <FaSignOutAlt className="menu-icon" />
        <span>Sair</span>
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
