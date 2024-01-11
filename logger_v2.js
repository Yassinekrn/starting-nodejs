const EventEmitter = require("events");

var url = "http://mylogger.io/log";

class Logger extends EventEmitter {
    log(message) {
        //send an Http req
        console.log(message);

        this.emit("messageLogged", { id: 1, url: "http://" }); // raise an event
    }
}

module.exports = Logger; // export the class
