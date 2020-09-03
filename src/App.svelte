<script lang="ts">
  import "./assets/Tailwindcss.svelte";

  let leftExpanded = false;
  let rightExpanded = false;
  let hasFooter = true;
</script>

<div class="flex flex-col h-screen w-screen min-h-0 min-w-0">
  <nav class="px-2 py-3 border-b bg-blue-600 text-white shadow-md flex">
    <h1 class="font-semibold pr-2">Navbar</h1>
    <ul class="flex -mx-1">
      <li class="px-1">
        <label><input bind:checked={leftExpanded} type="checkbox" />Left
          Expanded</label>
      </li>
      <li class="px-1">
        <label><input bind:checked={rightExpanded} type="checkbox" />Right
          Expanded</label>
      </li>
      <li class="px-1">
        <label><input bind:checked={hasFooter} type="checkbox" />Has Footer</label>
      </li>
    </ul>
  </nav>
  <section class="flex flex-1 min-h-0 min-w-0">
    <aside
      class="h-full bg-gray-100 border-r overflow-auto p-3 max-w-sm {leftExpanded ? ' w-full' : 'w-16'}">
      <p class:hidden={!leftExpanded} style="height: 200%">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has?
      </p>
    </aside>
    <main class="flex-1 h-full overflow-auto p-3 bg-white">
      <p style="height: 200%">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has?
      </p>
    </main>
    <aside
      class="h-full bg-gray-300 border-r overflow-auto p-3 {rightExpanded ? ' w-full' : 'w-16'}
        max-w-sm">
      <p class:hidden={!rightExpanded} style="height: 200%">
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has?
      </p>
    </aside>
  </section>
  {#if hasFooter}
    <footer class="p-1 border-b bg-gray-200">footer</footer>
  {/if}
</div>
