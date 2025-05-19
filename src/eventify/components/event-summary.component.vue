<script>
import {Card as PvCard} from "primevue";
import {EventService} from "../services/event.service.js";
import {AttendeeService} from "../services/attendee.service.js";

export default {
  name: 'event-summary',
  components: {PvCard},
  data() {
    return {
      events: [],
      attendees: [],
      eventService: new EventService(),
      attendeeService: new AttendeeService()
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const eventsRes = await this.eventService.getAll();
        const attendeesRes = await this.attendeeService.getAll();

        this.events = eventsRes.data;
        this.attendees = attendeesRes.data;
      } catch (error) {
        console.error('Error loading event or attendee data:', error);
      }
    },
    getAttendeeCount(eventId) {
      return this.attendees.filter(a => a.eventId === eventId).length;
    },
    getAttendancePercentage(eventId) {
      const related = this.attendees.filter(a => a.eventId === eventId);
      if (related.length === 0) return 0;

      const checkedIn = related.filter(a => a.checkedIn).length;
      return Math.round((checkedIn / related.length) * 100);
    }
  }
};
</script>


<template>
  <div class="p-4 grid gap-4 md:grid-cols-2">
    <pv-card v-for="event in events" :key="event.id">
      <template #header>
        <div class="font-bold text-lg">{{ event.name }}</div>
      </template>

      <template #content>
        <div>
          {{ event.description || 'No description available.' }}
        </div>
      </template>

      <template #footer>
        <div class="flex justify-between mt-2 text-sm">
          <div>
            <strong>Registered Attendees:</strong>
            {{ getAttendeeCount(event.id) }}
          </div>
          <div>
            <strong>Attendance %:</strong>
            {{ getAttendancePercentage(event.id) }}%
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style>
</style>
