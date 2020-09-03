<script lang="typescript">
  import Stack from './Stack.svelte'

  export let reverse: boolean = true

  import Tailwind from '../../assets/Tailwindcss.svelte'

</script>

<Tailwind />

<Stack {reverse}>
  <p>Slot 1</p>
  <p>Slot 2</p>
  <p>Slot 3</p>
</Stack>
