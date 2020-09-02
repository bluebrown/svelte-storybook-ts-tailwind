<script lang="ts">
  import './assets/Tailwindcss.svelte';
  import Navbar from './Layout/nav/Navbar.svelte';
  import Sidebar from './Layout/aside/Sidebar.svelte';
  let sidebarHidden = true;
</script>

<style>

</style>

<main class="flex w-full h-full min-w-0 min-h-0">
  <div class="flex flex-col flex-1 min-h-0 min-w-0">
    <header class="w-full min-w-0 border-b p-3 pb-5 overflow-auto bg-gray-100 flex flex-col">
      <Navbar end={[{ label: 'Sidebar', onclick: () => (sidebarHidden = !sidebarHidden) }]} />
      <div class="flex flex-wrap min-h-0 min-w-0" />
    </header>
    <main class="min-h-0 min-w-0 w-full flex-1 flex overflow-auto relative">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta tempore voluptate quod? Praesentium, molestias! 
        Minima, eveniet sed iure adipisci, doloremque optio enim magni dolorem quasi ducimus repudiandae officia hic fugit?
      </p>
    </main>
  </div>
  <Sidebar hidden={sidebarHidden} />
</main>
