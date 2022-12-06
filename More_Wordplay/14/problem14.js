const question =
  "Write a function that takes a string word as the first argument, a string letter as the second argument, and returns a count of how many times letter occurs in word.";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

let answer = [];

// code here

console.log(question);
console.log(answer);
