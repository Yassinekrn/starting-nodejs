const EventEmitter = require("events"); // Class in nodejs
const emitter = new EventEmitter(); // obj of EventEmitter class

var url = "http://mylogger.io/log";

function log(message) {
    //send an Http req
    console.log(message);

    emitter.emit("messageLogged", { id: 1, url: "http://" }); // raise an event
}

module.exports.log = log;
// we are sending an obj, but we can just module.exports since there is only one fn
// in the app.js: logger("message")
// module.exports.url = url; // name could be changed: export.Name
