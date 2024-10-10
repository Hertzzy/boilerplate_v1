import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ButtonBack from '.';
import { ButtonBackProps } from './ButtonBackStyle';
import { StoryFn } from '@storybook/react';

interface RouterWrapperProps {
  children: ReactNode;
}

const RouterWrapper: React.FC<RouterWrapperProps> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default {
  title: 'src/components/common/Buttons/ButtonBack',
  component: ButtonBack,
  decorators: [
    (Story: React.FC) => (
      <RouterWrapper>
        <Story />
      </RouterWrapper>
    )
  ]
};

const Template: StoryFn<ButtonBackProps> = args => <ButtonBack {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/'
};
