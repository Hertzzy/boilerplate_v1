// src/components/SidebarStyles.ts

import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface SidebarProps {
  $isOpen: boolean;
}

export const SidebarContainer = styled.div<SidebarProps>`
  width: ${({ $isOpen }) => ($isOpen ? '250px' : '80px')};
  background-color: #fff;
  color: #536d82;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: width 0.3s;
  position: relative;
  height: 100vh;

  -webkit-box-shadow: 0px 3px 12px 0px rgba(83, 109, 130, 0.3);
  -moz-box-shadow: 0px 3px 12px 0px rgba(83, 109, 130, 0.3);
  box-shadow: 0px 3px 12px 0px rgba(83, 109, 130, 0.3);
`;

export const MenuLogo = styled.div<{ $isOpen: boolean }>`
  font-size: 32px;
  padding: 20px 5px;
`;

export const MenuItem = styled(Link)<{ $isOpen: boolean; 'data-is-active'?: boolean }>`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  justify-content: ${({ $isOpen }) => ($isOpen ? 'flex-start' : 'center')};
  cursor: pointer;
  text-decoration: none;
  color: ${({ 'data-is-active': isActive }) => (isActive ? '#fff' : '#536d82')};
  background-color: ${({ 'data-is-active': isActive }) => (isActive ? '#536d82' : '#fff')};
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

export const ToggleButton = styled.button<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 20px;
  left: ${({ $isOpen }) => ($isOpen ? '200px' : '28px')};
  background: none;
  border: none;
  color: #536d82;
  font-size: 24px;
  cursor: pointer;
  transition: left 0.3s;

  .menu-icon {
    color: '#536d82';
  }
`;
