import React from 'react';
import { ContainerView } from './ContainerStyle';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContainerView>{children}</ContainerView>;
};

export default Container;
