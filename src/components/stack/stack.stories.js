import Stack from './StackView.svelte';

export default {
  title: 'Stack',
  component: Stack,
  argTypes: {
    reverse: {control: 'boolean'}
  }
};


const Template = ({ ...args }) => ({
  Component: Stack,
  props: args,
  argTypes: {
    reverse: {control: 'boolean'},
  }
});

export const Vertical = Template.bind({});

