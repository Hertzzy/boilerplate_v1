import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaImage, FaUnlock, FaSignOutAlt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

const DropdownContainer = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#333' : '#fff')};
  transition: opacity 0.3s;
`;

const DropdownItem = styled(NavLink)<{ $isDarkMode: boolean }>`
  border-radius: 5px;
  padding: 10px 20px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#ccc' : '#536d82')};
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#fff')};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    color: #fff;
    background-color: #536d82;
  }

  &:hover {
    background-color: #536d82;
    color: #fff;
  }

  .dropdown-icons {
    font-size: 1.2rem;
    margin-right: 15px;
  }
`;

const LogoutButton = styled.button<{ $isDarkMode: boolean }>`
  border-radius: 5px;
  padding: 10px 20px;
  color: ${({ $isDarkMode }) => ($isDarkMode ? '#ccc' : '#536d82')};
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#444' : '#fff')};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
  border: none;
  outline: none;
  font-size: 1rem;

  &:hover {
    background-color: #536d82;
    color: #fff;
  }

  .dropdown-icons {
    font-size: 1.2rem;
    margin-right: 15px;
  }
`;

const NavLinks: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Chama a função de logout
    navigate('/login'); // Redireciona para a página de login após o logout
  };

  return (
    <DropdownContainer $isDarkMode={isDarkMode}>
      <DropdownItem to="/update-photo" $isDarkMode={isDarkMode}>
        <FaImage className="dropdown-icons" />
        Alterar foto
      </DropdownItem>
      <DropdownItem to="/update-user-password" $isDarkMode={isDarkMode}>
        <FaUnlock className="dropdown-icons" />
        Alterar senha
      </DropdownItem>
      <LogoutButton onClick={handleLogout} $isDarkMode={isDarkMode}>
        <FaSignOutAlt className="dropdown-icons" />
        Sair
      </LogoutButton>
    </DropdownContainer>
  );
};

export default NavLinks;
