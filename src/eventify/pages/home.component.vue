<template>
  <div class="p-4">
    <h2 class="text-2xl mb-4">Upcoming Events</h2>
    <event-summary />
  </div>
</template>

<script>
import EventSummary from "../components/event-summary.component.vue";

export default {
  name: 'home',
  components: {
    EventSummary,
  },
};
</script>