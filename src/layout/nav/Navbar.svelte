<script>
  export let start = [];
  export let end = [];
</script>

<nav class="flex -mx-1 mb-2">
  <div class="flex-1">
    {#each start as { label, onclick } (label)}
      <span class="px-1">
        <button
          on:click={onclick}
          class="minor-button">
          {label}
        </button>
      </span>
    {/each}

	</div>
  <div>
    {#each end as { label, onclick } (label)}
      <span class="px-1">
        <button
          on:click={onclick}
          class="minor-button">
          {label}
        </button>
      </span>
    {/each}

  </div>
</nav>
