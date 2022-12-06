const question =
  "Write a function that takes a string phrase and returns a dictionary contains counts of how many times every character appears in phrase.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

// code here

console.log(question);
console.log(answer);
