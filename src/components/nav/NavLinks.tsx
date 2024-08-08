import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'; // Use NavLink
import { FaImage, FaUnlock, FaSignOutAlt } from 'react-icons/fa';

const DropdownContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: opacity 0.3s; /* Animação opcional para abertura e fechamento */
`;

const DropdownItem = styled(NavLink)`
  // Use NavLink
  border-radius: 5px;
  padding: 10px 20px;
  color: #536d82;
  background-color: #fff;
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
  return (
    <DropdownContainer>
      <DropdownItem to="/update-photo">
        <FaImage className="dropdown-icons" />
        Alterar foto
      </DropdownItem>
      <DropdownItem to="/update-user-password">
        <FaUnlock className="dropdown-icons" />
        Alterar senha
      </DropdownItem>
      <DropdownItem to="/logout">
        <FaSignOutAlt className="dropdown-icons" />
        Sair
      </DropdownItem>
    </DropdownContainer>
  );
};

export default NavLinks;
