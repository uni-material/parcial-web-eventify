import httpInstance from "../../shared/services/http.instance.js";

export class EventService{

    resourceEndpoint = import.meta.env.VITE_EVENTS_ENDPOINT_PATH;

    getAll(){
        return httpInstance.get(this.resourceEndpoint);
    }

    getById(id) {
        return httpInstance.get(`${this.resourceEndpoint}/${id}`);
    }
}