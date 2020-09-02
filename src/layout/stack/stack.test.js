
import Stack from './StackView.svelte';
import { render } from '@testing-library/svelte';

test('Stack Children', async () => {
  const { container } = await render(Stack, {
    props: {
      reverse: true,
    },
  });

  const stack = container.firstChild.firstChild

  expect(stack.lastChild.textContent).toBe('Slot 3');

});