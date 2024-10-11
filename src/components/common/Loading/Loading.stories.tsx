import { StoryFn } from '@storybook/react';
import Loading from '.';

export default {
  title: 'src/components/Loading',
  component: Loading
};

const Template: StoryFn = () => <Loading />;

export const Default = Template.bind({});
