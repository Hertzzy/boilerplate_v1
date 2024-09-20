// src/components/NavLinks/NavLinksStyles.ts
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

interface DropdownProps {}

const DropdownContainer = styled.div<DropdownProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: opacity 0.3s;
`;

const DropdownItem = styled(NavLink)<DropdownProps>`
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

export { DropdownContainer, DropdownItem };
