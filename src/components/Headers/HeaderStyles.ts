// src/components/Header/HeaderStyles.ts
import styled from 'styled-components';

export interface HeaderViewProps {
  pageTitle: string;
  icon?: React.ReactNode;
  isDarkMode: boolean; // Adicionando isDarkMode
  toggleDarkMode: () => void; // Adicionando toggleDarkMode
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 10px;
  color: #536d82;
  border-bottom: 1px solid #536d82;
`;

export const PageTitle = styled.h1`
  color: #536d82;
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  margin-top: 8px;
  margin-right: 15px;
  font-size: 32px;
`;

export const DarkModeButton = styled.div`
  font-size: 28px;
  margin-top: 8px;
  margin-right: 20px;
  cursor: pointer;
`;
