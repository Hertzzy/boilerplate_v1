import { Meta, StoryFn } from '@storybook/react';
import ButtonSubmit from '../../../../../components/common/Buttons/ButtonSubmit';
import { ButtonSubmitProps } from '../../../../../components/common/Buttons/ButtonSubmit/ButtonSubmitStyle';

export default {
  title: 'src/components/common/Buttons/ButtonSubmit',
  component: ButtonSubmit
} as Meta<typeof ButtonSubmit>;

const Template: StoryFn<ButtonSubmitProps> = args => <ButtonSubmit {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Salvar'
};
