export class Attendee{
    constructor(data) {
        this.id = data.id
        this.eventId = data.eventId
        this.name = data.name
        this.checkedIn = data.checkedIn
    }
}