import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ButtonRoute from '.';
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  to: '/about',
  children: 'About Us',
  icon: <span>🚀</span>
};
