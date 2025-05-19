<script>
import {Card as PvCard} from "primevue";

export default {
  name: 'event-summary',
  components: {PvCard},
  props: {
    event: Object,
  },
};
</script>


<template>
  <pv-card class="m-2" style="width: 300px;">
    <template #title>
      {{ event.name }}
    </template>
    <template #content>
      <p>{{ event.location }}</p>
      <p>{{ event.date }}</p>
    </template>
  </pv-card>
</template>

<style>
</style>
