<script lang="typescript">
  import Tailwind from '../../assets/Tailwindcss.svelte'
  import Stack from './Stack.svelte'

  export let reverse: boolean = false

</script>

<Tailwind />

<Stack {reverse}>
  <p>Slot 1</p>
  <p>Slot 2</p>
  <p>Slot 3</p>
</Stack>
