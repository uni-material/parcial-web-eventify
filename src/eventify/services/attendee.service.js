import httpInstance from "../../shared/services/http.instance.js";

export class AttendeeService{

    resourceEndpoint = import.meta.env.VITE_ATTENDEES_ENDPOINT_PATH;

    getAll(){
        return httpInstance.get(this.resourceEndpoint);
    }

    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }

    update(attendee) {
        return httpInstance.put(`${this.resourceEndpoint}/${attendee.id}`, attendee);
    }

}
