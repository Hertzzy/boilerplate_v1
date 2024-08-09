import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

const DropdownContainer = styled.div<{ $isDarkMode: boolean }>`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#333' : '#fff')};
  transition: background-color 0.3s;
`;

const DropdownItem = styled(Link)<{ isActive?: boolean; $isDarkMode: boolean }>`
  border-radius: 5px;
  padding: 10px 20px;
  color: ${({ isActive, $isDarkMode }) => (isActive ? '#fff' : $isDarkMode ? '#ccc' : '#536d82')};
  background-color: ${({ isActive, $isDarkMode }) => (isActive ? '#536d82' : $isDarkMode ? '#444' : '#fff')};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #536d82;
    color: #fff;
  }

  .dropdown-icons {
    font-size: 1.2rem;
    margin-right: 15px;
  }
`;

const NavLinkRegisters: React.FC = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();

  return (
    <DropdownContainer $isDarkMode={isDarkMode}>
      <DropdownItem to="/client-search" isActive={location.pathname === '/client-search'} $isDarkMode={isDarkMode}>
        Cliente
      </DropdownItem>
      <DropdownItem to="/supplier-search" isActive={location.pathname === '/supplier-search'} $isDarkMode={isDarkMode}>
        Funcionário
      </DropdownItem>
      <DropdownItem to="/employee-search" isActive={location.pathname === '/employee-search'} $isDarkMode={isDarkMode}>
        Fornecedor
      </DropdownItem>
      <DropdownItem
        to="/user-group-search"
        isActive={location.pathname === '/user-group-search'}
        $isDarkMode={isDarkMode}
      >
        Grupo de Usuários
      </DropdownItem>
      <DropdownItem to="/user-search" isActive={location.pathname === '/user-search'} $isDarkMode={isDarkMode}>
        Usuários
      </DropdownItem>
    </DropdownContainer>
  );
};

export default NavLinkRegisters;
