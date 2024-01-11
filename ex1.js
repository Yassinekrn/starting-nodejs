const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("logging", (e) => {
    console.log("Listener called: ", e);
});

emitter.emit("logging", { data: "message" });

//exec: Listener called:  { data: 'message' }
