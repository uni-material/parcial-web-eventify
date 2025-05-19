<script>
import {AttendeeService} from "../services/attendee.service.js";
import {EventService} from "../services/event.service.js";
import {Button, Card, InputText} from "primevue";

export default {
  name: "CheckInComponent",
  components: {
    Card,
    InputText,
    Button,
  },
  data() {
    return {
      ticketId: "",
      message: "",
      error: "",
      attendeeService: new AttendeeService(),
    };
  },
  methods: {
    checkInTicket() {
      this.message = "";
      this.error = "";

      if (!this.ticketId) {
        this.error = "Please enter a ticket identifier.";
        return;
      }

      this.attendeeService.getById(this.ticketId)
          .then((res) => {
            const attendee = res.data;
            if (attendee.checkedIn) {
              this.message = `Attendee ${attendee.name} already checked in.`;
              return;
            }

            const updatedAttendee = {
              ...attendee,
              checkedIn: true,
            };

            this.attendeeService.update(updatedAttendee)
                .then(() => {
                  this.message = `Check-in successful for ${attendee.name}`;
                })
                .catch((err) => {
                  console.error("Error updating attendee:", err);
                  this.error = "Failed to check in. Please try again.";
                });
          })
          .catch((err) => {
            console.error("Attendee not found:", err);
            this.error = "Attendee not found. Please check the ticket identifier.";
          });
    }
  }
};
</script>

<template>
  <div class="p-4">
    <Card>
      <template #title>
        Ticket Check-In
      </template>
      <template #content>
        <div class="p-fluid">
          <div class="field">
            <label for="ticketId">Ticket Identifier</label>
            <InputText id="ticketId" v-model="ticketId" />
          </div>
          <Button label="Check-In" icon="pi pi-check" @click="checkInTicket" />
        </div>
        <div v-if="message" class="mt-3 text-green-600">{{ message }}</div>
        <div v-if="error" class="mt-3 text-red-600">{{ error }}</div>
      </template>
    </Card>
  </div>
</template>

<style scoped>

</style>