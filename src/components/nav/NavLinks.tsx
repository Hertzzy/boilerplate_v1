import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaImage, FaUnlock, FaSignOutAlt } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

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

const NavLinks: React.FC = () => {
  const { isDarkMode } = useTheme();

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
      <DropdownItem to="/logout" $isDarkMode={isDarkMode}>
        <FaSignOutAlt className="dropdown-icons" />
        Sair
      </DropdownItem>
    </DropdownContainer>
  );
};

export default NavLinks;
