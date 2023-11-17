// local module
const { log } = require("console");
const { a, add } = require("./local-1");
const { a: a2, add: add2 } = require("./local-2");

console.log(a2, add2(2, 3, 5));

// built-in module
const path = require("path");

console.log(
  path.parse("/K:/00.PH/00.ProgrammingHero-Level2/02.Mission2/module7/learning-node/index.js")
);
