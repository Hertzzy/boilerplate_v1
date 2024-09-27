// src/components/ButtonRoute.stories.tsx

import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ButtonRoute from '../ButtonRoute';
import { ButtonRouteProps } from './ButtonRouteStyle';
import { StoryFn } from '@storybook/react';
import { FaPlus } from 'react-icons/fa';

interface RouterWrapperProps {
  children: ReactNode;
}

const RouterWrapper: React.FC<RouterWrapperProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default {
  title: 'src/components/common/Buttons/ButtonRoute',
  component: ButtonRoute,
  decorators: [
    (Story: React.FC) => (
      <RouterWrapper>
        <Story />
      </RouterWrapper>
    )
  ]
};

const Template: StoryFn<ButtonRouteProps> = args => <ButtonRoute {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/',
  children: 'Cadastrar',
  icon: <FaPlus />
};

// Exemplo com ícone
export const WithIcon = Template.bind({});
WithIcon.args = {
  to: '/about', // Caminho para onde o botão deve navegar
  children: 'About Us', // Texto exibido no botão
  icon: <span>🚀</span> // Exemplo de ícone
};
