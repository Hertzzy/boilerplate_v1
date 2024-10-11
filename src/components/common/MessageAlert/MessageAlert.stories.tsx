import { useState } from 'react';
import { StoryFn } from '@storybook/react';
import MessageAlert from '.';
import { MessageAlertProps } from './MessageAlertStyle';

export default {
  title: 'src/components/MessageAlert',
  component: MessageAlert
};

const Template: StoryFn<MessageAlertProps> = args => {
  const [visible, setVisible] = useState(true);

  return <>{visible && <MessageAlert {...args} onClose={() => setVisible(false)} />}</>;
};

export const Success = Template.bind({});
Success.args = {
  message: 'Operation completed successfully!',
  type: 'success'
};

export const Error = Template.bind({});
Error.args = {
  message: 'Something went wrong!',
  type: 'error'
};
