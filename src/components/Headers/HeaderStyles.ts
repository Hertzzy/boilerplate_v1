// src/components/Header/HeaderStyles.ts
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 10px;
  color: #536d82;
  border-bottom: 1px solid #536d82;
`;

const PageTitle = styled.h1`
  color: #536d82;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-top: 8px;
  margin-right: 15px;
  font-size: 32px;
`;

export { HeaderContainer, PageTitle, Icon };
