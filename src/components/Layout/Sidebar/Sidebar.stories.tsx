import React from 'react';
import { StoryFn } from '@storybook/react';
import Sidebar from '.';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../../context/AuthContext'; // Importe seu contexto de autenticação

export default {
  title: 'src/components/Sidebar',
  component: Sidebar
};

const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>; // Adicione o AuthProvider para simular o contexto de autenticação
};

const Template: StoryFn = () => (
  <RouterWrapper>
    <AuthWrapper>
      <Sidebar />
    </AuthWrapper>
  </RouterWrapper>
);

export const Default = Template.bind({});
Default.args = {};
