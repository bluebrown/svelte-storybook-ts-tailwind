<script>
  export let hidden = false;
</script>

{#if !hidden}
  <aside
    id="sidebar"
    class="bg-gray-300 w-screen max-w-sm h-full flex flex-col items-center pt-3 px-3 min-h-0 overflow-auto min-w-0
    border-l text-gra-900">
    <h1 class="pl-3 w-full font-semibold">Favorites</h1>
    <ul id="favorites" class="font-sm flex w-full flex-col-reverse mb-3">
      <li
        v-for="(fav, i) in favorites"
        class="hover:bg-white hover:shadow-sm rounded-md mb-2 p-3 cursor-pointer focus:outline-none
        focus:shadow-outline group">
        item
      </li>
    </ul>
  </aside>
{/if}
