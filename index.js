const R = require("ramda");

const data = ["A", "B", "C", "D", "E", "F"];
const answer = R.nth(1, data);
console.log(answer);
