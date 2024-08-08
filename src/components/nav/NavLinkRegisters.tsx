import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const DropdownContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const DropdownItem = styled(Link)<{ isActive?: boolean }>`
  border-radius: 5px;
  padding: 10px 20px;
  color: ${({ isActive }) => (isActive ? '#fff' : '#536d82')};
  background-color: ${({ isActive }) => (isActive ? '#536d82' : '#fff')};
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

  return (
    <DropdownContainer>
      <DropdownItem to="/client-search" isActive={location.pathname === '/client-search'}>
        Cliente
      </DropdownItem>
      <DropdownItem to="/supplier-search" isActive={location.pathname === '/supplier-search'}>
        Fornecedor
      </DropdownItem>
      <DropdownItem to="/employee-search" isActive={location.pathname === '/employee-search'}>
        Funcionário
      </DropdownItem>
      <DropdownItem to="/user-group-search" isActive={location.pathname === '/user-group-search'}>
        Grupo de Usuários
      </DropdownItem>
      <DropdownItem to="/user-search" isActive={location.pathname === '/user-search'}>
        Usuários
      </DropdownItem>
    </DropdownContainer>
  );
};

export default NavLinkRegisters;
