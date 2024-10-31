import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: opacity 0.3s;

  &.dark-mode {
    background-color: #333; /* Cor de fundo escura */
  }

  &.light-mode {
    background-color: #fff; /* Cor de fundo clara */
  }
`;

const DropdownItem = styled(NavLink)`
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;

  &.dark-mode {
    color: #fff;
    background-color: #333;
  }

  &.dark-mode:hover {
    color: #333;
    background-color: #fff;
  }

  &.light-mode {
    color: #536d82;
  }

  &.light-mode:hover {
    background-color: #536d82;
    color: #fff;
  }
`;

export { DropdownContainer, DropdownItem };
