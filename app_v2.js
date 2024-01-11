const EventEmitter = require("events");

const Logger = require("./logger_v2");

const logger = new Logger();

logger.on("messageLogged", (e) => {
    console.log("Listener called ", e);
});

logger.log("message");

//TODO: complete the last part of the tutorial: http module
