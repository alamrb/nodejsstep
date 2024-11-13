// npm - global command, comes with node
// npm --version
// local dependency -use it only in this particular project
// npm i <PackageName>
// global dependency -use it in any project
// npm install -g <packageName>
// sudo npm indall -g <packageName>
// package.json -mainfest fil e
// npm init(step by step, press enter to skip)
// npm init -y (eveything default)

// -D or --save-dev

// Event Loop, Async Patter, Events Emitter and streams

const _ = require("lodash");

const items = [1, [2, [3, [4, [5]]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);
console.log("Hello all");
