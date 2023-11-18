const EventEmitter = require("events");

// Instances of event emitter
const myEmitter = new EventEmitter();

// event listener
myEmitter.on("birthday", () => {
  console.log("Happy Birthday to you.");
});

myEmitter.on("birthday", (gift) => {
  console.log(`I will send you a gift ${gift}.`);
});

myEmitter.emit("birthday", "watch");
