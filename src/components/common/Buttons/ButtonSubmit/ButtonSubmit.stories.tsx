import { Meta, StoryFn } from '@storybook/react';
import ButtonSubmit from '../ButtonSubmit';
import { ButtonSubmitProps } from './ButtonSubmitStyle';

export default {
  title: 'src/components/common/Buttons/ButtonSubmit',
  component: ButtonSubmit
} as Meta<typeof ButtonSubmit>;

const Template: StoryFn<ButtonSubmitProps> = args => <ButtonSubmit {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Salvar'
};
