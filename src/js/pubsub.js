export const pubsub = {
    events: {},
    subscribe(evName, fn) {
        //add an event as evName as either new or to the exiting events list
        this.events[evName] = this.events[evName] || [];
        this.events[evName].push(fn);
    },
    publish(evName, data) {
        //emit/publish/announce the event to anyone who is subscribed
        if(this.events[evName]) {
            this.events[evName].forEach(f => {
                f(data);
            })
        }
    }
}