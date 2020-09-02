import CSVExport from './CSVExport.svelte';

export default {
  title: 'CSV Export',
  component: CSVExport,
};

const Template = ({ ...args }) => ({
  Component: CSVExport,
  props: args,

});

export const ArrayOfArrays = Template.bind({});
ArrayOfArrays.args = {
  data: [
    ['a', 'b' , 'c'],
    ['a', 'b' , 'c'],
    ['a', 'b' , 'c'],
  ]
}


export const ArrayOfObjects = Template.bind({});
ArrayOfObjects.args = {
  data: [
    {
      a: 'a', b: 'b', c: 'c'
    },
    {
      a: 'a', b: 'b', c: 'c'
    },
    {
      a: 'a', b: 'b', c: 'c'
    }
  ]
}
