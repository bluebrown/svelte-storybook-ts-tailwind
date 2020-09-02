  <script lang="typescript">
    export let reverse: boolean = false
  </script>
  
  <h1>{reverse}</h1>
  <div class="flex {reverse ? 'flex-col-reverse' : 'flex-col'}">
      <slot><!-- optional fallback --></slot>
  </div>