  <script lang="typescript">
    export let reverse: boolean = false
  </script>
  
  <div class="flex {reverse ? 'flex-col-reverse' : 'flex-col'}">
      <slot><!-- optional fallback --></slot>
  </div>