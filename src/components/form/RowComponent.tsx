// components/layout/RowComponent.tsx
import React from 'react';
import styled from 'styled-components';

const StyledRowComponent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); // Divide em 3 colunas iguais
  gap: 10px; // Espaçamento entre os inputs
  width: 100%; // Garante que o RowComponent ocupe toda a largura disponível
  margin-top: 25px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr); // 2 colunas em telas menores
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; // 1 coluna em telas pequenas (celulares)
  }
`;

interface RowComponentProps {
  children: React.ReactNode;
}

const RowComponent: React.FC<RowComponentProps> = ({ children }) => {
  return <StyledRowComponent>{children}</StyledRowComponent>;
};

export default RowComponent;
