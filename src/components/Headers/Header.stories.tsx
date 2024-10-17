import { StoryFn } from '@storybook/react';
import Header from '.';
import { HeaderViewProps } from './HeaderStyles';

export default {
  title: 'src/components/Header',
  component: Header,
  argTypes: {
    pageTitle: { control: 'text' },
    icon: { control: 'text' }
  }
};

const Template: StoryFn<HeaderViewProps> = args => <Header {...args} />;

// Definição do Storie padrão
export const Default = Template.bind({});
Default.args = {
  pageTitle: 'Dashboard'
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  pageTitle: 'Dashboard',
  icon: '⭐'
};
