const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received with ${name} and age ${id}`);
});

customEmitter.on("response", () => {
  console.log(`Some Other Logic`);
});

customEmitter.emit("response", "John", 35);
