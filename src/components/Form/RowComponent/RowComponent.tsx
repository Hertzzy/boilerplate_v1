// components/layout/RowComponent.tsx
import React from 'react';
import { RowComponentProps, StyledRowComponent } from './RowComponentStyle';

const RowComponent: React.FC<RowComponentProps> = ({ children }) => {
  return <StyledRowComponent>{children}</StyledRowComponent>;
};

export default RowComponent;
