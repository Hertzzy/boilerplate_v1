// src/components/Header/Header.stories.tsx
import { StoryFn } from '@storybook/react';
import Header from '../../../components/Headers';
import { HeaderViewProps } from '../../../components/Headers/HeaderStyles';

// Definição do componente no Storybook
export default {
  title: 'src/components/Header',
  component: Header,
  argTypes: {
    pageTitle: { control: 'text' },
    icon: { control: 'text' }
  }
};

// Template do componente
const Template: StoryFn<HeaderViewProps> = args => <Header {...args} />;

// Definição do Storie padrão
export const Default = Template.bind({});
Default.args = {
  pageTitle: 'Dashboard'
};

// Exemplo com um ícone
export const WithIcon = Template.bind({});
WithIcon.args = {
  pageTitle: 'Dashboard',
  icon: '⭐' // Exemplo de string, pode ser um componente de ícone real
};
