// src/components/Header/HeaderStyles.ts
import styled from 'styled-components';

export interface HeaderViewProps {
  pageTitle: string;
  icon?: React.ReactNode;
  isDarkMode: boolean;
}

export interface HeaderDarkModeProps {
  isDarkMode: boolean;
}

export const HeaderContainer = styled.header<HeaderDarkModeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 10px;
  color: ${({ isDarkMode }) => (isDarkMode ? '#f5f5f5' : '#536d82')}; // Mudar a cor do texto
  border-bottom: 1px solid ${({ isDarkMode }) => (isDarkMode ? '#f5f5f5' : '#536d82')};
`;

export const PageTitle = styled.h1<HeaderDarkModeProps>`
  color: ${({ isDarkMode }) => (isDarkMode ? '#f5f5f5' : '#536d82')}; // Mudar a cor do texto
  display: flex;
  align-items: center;
  font-weight: 500;
`;

export const Icon = styled.span`
  margin-top: 8px;
  margin-right: 15px;
  font-size: 32px;
`;
