import React from 'react';
import { StoryFn } from '@storybook/react';
import Container from '.';
import { ContainerView } from './ContainerStyle';

export default {
  title: 'src/components/Container',
  component: Container
};

const Template: StoryFn<{ children: React.ReactNode }> = args => <ContainerView {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p>This is a container example with some content inside.</p>
};

export const WithMultipleChildren = Template.bind({});
WithMultipleChildren.args = {
  children: (
    <>
      <h1>Header inside Container</h1>
    </>
  )
};
