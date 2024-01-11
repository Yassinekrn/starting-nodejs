//built in modules are required without a path
const path = require("path"); // prebuilt obj in nodejs
const os = require("os");
const fs = require("fs"); // pref to use async for better performance

const EventEmitter = require("events"); // Class in nodejs (Pascal case)
const emitter = new EventEmitter(); // obj of EventEmitter class

const logger = require("./logger");

// Register a listener
emitter.on("messageLogged", (e) => {
    console.log("Listener called ", e);
});

// emitter.emit("messageLogged", { id: 1, url: "http://" }); // raise an event

console.log(logger);
// to check for errors: npm install -g jshint | jshint app.js
logger.log("message"); // event emitter won't work since we are using a diff obj
// solution: export a class and instantiate it in the app.js (allows us to use the same obj)
function sayHello(name) {
    console.log(`Hello ${name} 👋`); // global obj, same as setTimeout..
}

sayHello("Yassine");
var pathObj = path.parse(__filename);
console.log(pathObj);

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", function (err, files) {
    if (err) console.log("Error", err);
    else console.log("Result", files);
});

// console.log(window); returns an exception: window doesn't exist in node
// window ❌ || global ✅
// node is module based to prevent overwritting methods

// node doesn't execute code directly -> wraps it in a function with diff args
// function (exports, require, module, __filename, __dirname)
