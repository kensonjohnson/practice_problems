const question =
  "What are the shortest words that start with “PRO” and end in “ING”? Make sure your solution can handle ties.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

// code here

console.log(question);
console.log(answer);
