import React, { useState } from 'react';
import {
  FaHome,
  FaUser,
  FaCog,
  FaAngleRight,
  FaAngleLeft,
  FaArchive,
  FaChevronRight,
  FaChevronDown,
  FaBox,
  FaSignOutAlt
} from 'react-icons/fa';
import Dropdown from '../../common/Dropdown';
import Loading from '../../common/Loading';
import { SidebarContainer, MenuLogo, MenuItem, ToggleButton } from './SidebarStyle';
import { useAuth } from '../../../context/AuthContext';
import { useTheme } from '../../../context/ThemeContext';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { logout } = useAuth();
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const [loading] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown: string) => setOpenDropdown(prev => (prev === dropdown ? null : dropdown));

  const handleLogout = () => {
    setTimeout(logout, 1000);
  };

  if (loading) return <Loading />;

  const menuItems = [
    { to: '/', icon: <FaHome />, label: 'Home' },
    {
      to: '#',
      icon: <FaUser />,
      label: 'Usuário',
      dropdown: 'user',
      links: [{ to: '/user-profile', label: 'Perfil de usuário' }]
    },
    {
      to: '#',
      icon: <FaBox />,
      label: 'Cadastro',
      dropdown: 'register',
      links: [{ to: '/users-view', label: 'Usuários' }]
    },
    { to: '/settings', icon: <FaCog />, label: 'Configurações' },
    { to: '#', icon: <FaSignOutAlt />, label: 'Sair', onClick: handleLogout }
  ];

  return (
    <SidebarContainer $isOpen={isOpen} isDarkMode={isDarkMode}>
      <ToggleButton $isOpen={isOpen} onClick={toggleSidebar} isDarkMode={isDarkMode}>
        {isOpen ? <FaAngleLeft className="menu-icon" /> : <FaAngleRight className="menu-icon" />}
      </ToggleButton>
      <MenuLogo $isOpen={isOpen}>
        <FaArchive />
      </MenuLogo>
      {menuItems.map(({ to, icon, label, dropdown, links, onClick }) => (
        <React.Fragment key={label}>
          <MenuItem
            to={to}
            $isOpen={isOpen}
            isDarkMode={isDarkMode}
            data-is-active={location.pathname === to}
            onClick={() => {
              if (dropdown) {
                toggleDropdown(dropdown);
              }
              if (onClick) {
                onClick();
              }
            }}
          >
            <div className="menu-icon">{icon}</div>
            <span>{label}</span>
            {dropdown &&
              isOpen &&
              (openDropdown === dropdown ? (
                <FaChevronDown className="iconChevron" />
              ) : (
                <FaChevronRight className="iconChevron" />
              ))}
          </MenuItem>
          {dropdown && openDropdown === dropdown && isOpen && <Dropdown links={links} />}
        </React.Fragment>
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
