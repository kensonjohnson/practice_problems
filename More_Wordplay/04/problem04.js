const question =
  "What are all of the words that start with “PRO”, end in “ING”, and are exactly 11 letters long?";

import { readFileSync } from "fs";

const fileReader = function (filepath) {
  return readFileSync(filepath, "utf8").toString().trim().split(/\r?\n/);
};

const scrabbleWords = fileReader("../sowpods.txt");

const startsWith = "PRO";
const endsWith = "ING";
const desiredLength = 11;

let answer = [];

// iterate over scrabble words
scrabbleWords.forEach((word) => {
  if (
    word.startsWith(startsWith) &&
    word.endsWith(endsWith) &&
    word.length === desiredLength
  ) {
    answer.push(word);
  }
});
// check if current word begins with PRO, ends with ING, and is exactly 11 characters long

// if a match, add the current word to the answer Array

// format the answer
console.log(question);
console.log(answer);
