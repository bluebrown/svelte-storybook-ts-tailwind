<script>
  export let notifications = []
</script>

<div class="absolute bottom-0 left-0 flex-col p-3">
  <p
    v-if="notifications[0]"
    on:click={() => notifications.shift()}
    class="bg-white p-3 rounded-md shadow-lg mb-2 cursor-pointer flex max-w-sm"
  >
    <i class="fas fa-lg fa-exclamation-triangle fill-current text-orange-500 mr-2" style="line-height: 1;"></i>
    <span>
      {notifications[0].message}
    </span>
  </p>
</div>