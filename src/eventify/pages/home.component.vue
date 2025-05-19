
<script>

import {EventService} from '../services/event.service.js'
import EventSummary from "../components/event-summary.component.vue";


export default {
  name: 'home',
  components: {
    EventSummary,
  },
  data() {
    return {
      events: [],
      eventService: new EventService(),
    };
  },
  mounted() {
    this.eventService.getAll().then(response => {
      this.events = response.data;
    }).catch(error => {
      console.error('Error loading events:', error);
    });
  },
};
</script>


<template>
  <div class="p-4">
    <h2 class="text-2xl mb-4">Upcoming Events</h2>
    <div class="flex flex-wrap">
      <event-summary
          v-for="event in events"
          :key="event.id"
          :event="event"
      />
    </div>
  </div>
</template>

<style scoped>

</style>