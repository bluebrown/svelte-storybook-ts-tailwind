<script lang="typescript">
  import Stack from './Stack.svelte'

  export let reverse: boolean = true

</script>

<Stack {reverse}>
  <p>Slot 1</p>
  <p>Slot 2</p>
  <p>Slot 3</p>
</Stack>
