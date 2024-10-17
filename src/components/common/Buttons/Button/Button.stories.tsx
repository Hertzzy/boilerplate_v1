import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Button from '.';
import { ButtonProps } from './ButtonStyle';
import { StoryFn } from '@storybook/react';

interface RouterWrapperProps {
  children: ReactNode;
}

const RouterWrapper: React.FC<RouterWrapperProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default {
  title: 'src/components/common/Buttons/Button',
  component: Button,
  decorators: [
    (Story: React.FC) => (
      <RouterWrapper>
        <Story />
      </RouterWrapper>
    )
  ]
};

const Template: StoryFn<ButtonProps> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Entrar',
  disabled: false,
  type: 'button'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Button',
  disabled: true,
  type: 'button'
};
