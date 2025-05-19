<script>
import ToolbarEvent from "./shared/components/toolbar-event.component.vue";

export default {
  name: 'app',
  components: {ToolbarEvent},
}
</script>

<template>
  <div class="min-h-screen flex flex-column">
    <toolbar-event></toolbar-event>
    <main class="p-4 flex-1">
      <router-view></router-view>
    </main>
  </div>
</template>