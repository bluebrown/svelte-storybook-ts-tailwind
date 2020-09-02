import Button from './Button.svelte';

export default {
  title: 'Button',
  component: Button,
};

const Template = ({ ...args }) => ({
  Component: Button,
  props: args,

});

export const Normal = Template.bind({});
