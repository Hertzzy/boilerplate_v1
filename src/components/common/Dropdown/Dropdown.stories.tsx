import React from 'react';
import { StoryFn } from '@storybook/react';
import MenuDropdown from '.';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'src/components/Dropdown',
  component: MenuDropdown,
  decorators: [
    (Story: React.FC) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
};

const Template: StoryFn = args => <MenuDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' }
  ]
};

export const Empty = Template.bind({});
Empty.args = {
  links: []
};
