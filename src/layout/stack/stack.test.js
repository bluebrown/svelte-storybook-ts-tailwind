
import Stack from './StackView.svelte';
import { render } from '@testing-library/svelte';
import '../../../.storybook/global.css'

test('Stack Children', async () => {
  const { container } = await render(Stack, {
    props: {},
  });

  const stack = container.firstChild.firstChild

  expect(stack.lastChild.textContent).toBe('Slot 3');

});


test('Stack Styles', async () => {
  const { container } = await render(Stack, {
    props: {
      reverse: true,
    },
  });

  const stack = container.firstChild.firstChild
  const styles = getComputedStyle(stack)

  expect(styles.display).toBe('flex');
  expect(styles.flexDirection).toBe('column-reverse');

});